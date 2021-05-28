require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { checkAdmin } = require("./controllers/middleware");
const adminCtrl = require("./controllers/adminController");

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((dbInstance) => {
    app.set("db", dbInstance);
    app.listen(SERVER_PORT, () =>
      console.log(`Server & db is running ${SERVER_PORT}`)
    );
  })
  .catch((err) => console.log(err));

//ENDPOINTS - USER
app.post("/admin/register", adminCtrl.registerAdmin);
app.post("/admin/login", adminCtrl.loginAdmin);
app.post("/admin/logout", adminCtrl.logoutAdmin);
app.get("/admin/me", checkAdmin, adminCtrl.getAdmin);

// ENPOINTS - NEWS
app.post("/api/post")

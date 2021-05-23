const bcrypt = require("bcryptjs");

module.exports = {
  registerAdmin: async (req, res) => {
    const db = req.app.get("db");
    let { userName, password } = req.body;

    try {
      const [foundAdmin] = await db.admin.get_admin(userName);
      if (foundAdmin) {
        res.status(401).send("Sorry account already exists");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const [newAdmin] = await db.admin.register_admin([userName, hash]);
        delete newAdmin.password;

        req.session.user = newAdmin;
        res.status(200).send(req.session.user);
      }
    } catch (err) {
      console.log("Database error on register function", err);
    }
  },

  loginAdmin: async (req, res) => {
    const db = req.app.get("db");
    const { userName, password } = req.body;
    console.log(req.body);
    try {
      const [foundUser] = await db.admin.get_admin(userName);
      if (foundUser) {
        const comparePassword = foundUser.password;
        const authenticated = bcrypt.compareSync(password, comparePassword);
        if (authenticated) {
          delete foundUser.password;
          req.session.user = foundUser;
          console.log(req.session.user);
          res.status(200).send(req.session.user);
        } else {
          res.status(401).send("Incorrect Username or password");
        }
      }
    } catch (err) {
      console.log("database error on login function", err);
    }
  },

  logoutAdmin: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },

  getAdmin: (req, res) => {
    res.status(200).send(req.session.user);
  },
};

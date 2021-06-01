module.exports = {
  createGuns: async (req, res) => {
    const db = req.app.get("db");
    let { content } = req.body;
    let date = new Date();

    const newGuns = await db.guns.create_guns(content, date);
    if (newGuns) {
      res.status(200).send(newGuns);
    } else {
      res.status(400).send("News post could not be created");
    }
  },
  
  getGuns: async (req, res) => {
    const db = req.app.get("db");
    let { date_created } = req.body;
    const news = await db.guns.get_all_guns(date_created);
    if (news) {
      res.status(200).send(news);
    } else {
      res.status(400).send("No news found");
    }
  }
};
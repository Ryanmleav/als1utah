module.exports = {
  createNews: async (req, res) => {
    const db = req.app.get("db");
    let { content } = req.body;
    let date = new Date();

    const newNews = await db.news.create_news(content, date);
    if (newNews) {
      res.status(200).send(newNews);
    } else {
      res.status(400).send("News post could not be created");
    }
  },
  
  getNews: async (req, res) => {
    const db = req.app.get("db");
    let { date_created } = req.body;
    const news = await db.news.get_all_news(date_created);
    if (news) {
      res.status(200).send(news);
    } else {
      res.status(400).send("No news found");
    }
  }
};

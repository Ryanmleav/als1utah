CREATE TABLE als_admin (
user_id SERIAL PRIMARY KEY,
user_name VARCHAR(100),
password VARCHAR(100)
);

CREATE TABLE news (
  news_id SERIAL PRIMARY KEY,
  content TEXT,
  date_created TIMESTAMP
);
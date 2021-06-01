INSERT INTO news
(content, date_created)
VALUES
($1, $2)
RETURNING *
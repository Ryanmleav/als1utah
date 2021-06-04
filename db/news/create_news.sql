INSERT INTO news
(content, posting_date)
VALUES
($1, $2)
RETURNING *
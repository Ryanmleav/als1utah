INSERT INTO guns_ammo
(content, date_created)
VALUES
($1, $2)
RETURNING *
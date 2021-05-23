INSERT INTO als_admin
(user_name, password)
VALUES
($1, $2)
RETURNING *
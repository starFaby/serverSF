DROP DATABASE girls;
CREATE DATABASE girls;
use girls;
CREATE TABLE users(
    iduser INT(11) NOT NULL,
    cedula VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(60) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp
);
ALTER TABLE users
ADD PRIMARY KEY (iduser);

ALTER TABLE users
MODIFY iduser INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

CREATE TABLE girl (
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description TEXT,
    iduser INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY(iduser) REFERENCES users(iduser)
);
ALTER TABLE girl
ADD PRIMARY KEY (id);

ALTER TABLE girl
MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
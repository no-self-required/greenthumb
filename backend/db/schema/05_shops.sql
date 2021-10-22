DROP TABLE IF EXISTS shops CASCADE;
CREATE TABLE shops(
    id SERIAL PRIMARY KEY NOT NULL,
    lat text,
    lng text
);
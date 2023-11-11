-- CREATE TABLE customer(
--     customer_id VARCHAR PRIMARY KEY,
--     firstname VARCHAR,
--     lastname VARCHAR,
--     email VARCHAR,
--     phone INTEGER,
--     c_address VARCHAR
-- );

-- CREATE TABLE movie(
--     movie_id SERIAL PRIMARY KEY,
--     title VARCHAR NOT NULL,
--     genre VARCHAR,
--     duration INTEGER
--     );

-- CREATE TABLE ticket(
--     ticket_id SERIAL PRIMARY KEY,
--     customer_id VARCHAR,
--     FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
--     movie_id VARCHAR,
--     -- FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
--     seatnumber VARCHAR,
--     Showtime VARCHAR
-- );

CREATE TABLE concession(
    item_id SERIAL PRIMARY KEY,
    i_name VARCHAR NOT NULL,
    i_type VARCHAR
);

INSERT INTO Customer (customer_id, firstname, lastname, email, phone, c_address)
VALUES
  ('001','John', 'Doe', 'johndoe@example.com', '5551234', 'M12345'),
  ('002','Jane', 'Smith', 'janesmith@example.com', '5559876', 'M67890'),
  ('003','Mike', 'Johnson', 'mikejohnson@example.com', '5555678', 'M24680'),
  ('004','Sarah', 'Williams', 'sarahwilliams@example.com', '5552345', 'M13579'),
  ('005','David', 'Brown', 'davidbrown@example.com', '5558765', 'M02468');


INSERT INTO movie (movie_id, title, genre, duration)
VALUES
  ('0011','Avatar','Science Fiction', '162'),
  ('0012','Inception','Science Fiction', '148'),
  ('0013','The Dark Knight', 'Action', '152'),
  ('0014','The Shawshank Redemption', 'Drama', '142'),
  ('0015','Pulp Fiction', 'Crime', '154');


INSERT INTO ticket (ticket_id, customer_id, movie_id, SeatNumber)
VALUES
  (1, '001', 0011, 'A1'),
  (2, '002', 0011, 'B3'),
  (3, '003', 0014, 'C2'),
  (4, '002', 0015, 'D5'),
  (5, '001', 0012, 'E4'); 

INSERT INTO concession (item_id, i_name, i_type)
VALUES
  (0021, 'Popcorn','Food'),
  (0022, 'Soda','Beverage'),
  (0023, 'Candy','Food'),
  (0024, 'Hot Dog','Food'),
  (0025, 'Nachos','Food');
-- Verify connection to DB using the Actor Table
-- Q1 How many actors are there with the last name ‘Wahlberg’?
SELECT COUNT (last_name)
FROM actor
WHERE last_name = 'Wahlberg';
-- Q2 How many payments were made between $3.99 and $5.99?
-- Using the WHERE Clause
SELECT COUNT(*) as payment_count
FROM payment
WHERE payment_amount >= 3.99
    AND payment_amount <= 5.99;
-- Q3 What film does the store have the most of?
SELECT film_title
FROM inventory
ORDER BY inventory_id DESC
LIMIT 1;
-- Q4 How many customers have the last name ‘William’?
SELECT COUNT (last_name)
FROM customer
WHERE last_name LIKE ‘ William ’;
-- Q5 What store employee (get the id) sold the most rentals?
SELECT staff_id
FROM rental
GROUP BY staff_id
ORDER BY Count (rental_id) DESC
LIMIT 1;
-- Q6 How many different district names are there
SELECT COUNT (DISTINCT (district_name))
FROM address;
-- Q7 What film has the most actors in it? (use film_actor table and get film_id)
SELECT film_id
FROM film_actor
GROUP BY film_id
ORDER BY Count (actor_id) DESC
LIMIT 1;
-- Q8. From store_id 1, how many customers have a last name ending with ‘es’?
SELECT COUNT (customer_id)
FROM customer
WHERE store_id = 1
    AND last_name LIKE '%es';
-- Q9. How many payment amounts (4.99, 5.99, etc.) had a number of rentals above 250 for customers
-- with ids between 380 and 430? (use group by and having > 250)
SELECT amount,
    COUNT(rental_id)
FROM payment
WHERE customer_id BETWEEN 380 AND 430
GROUP BY amount
HAVING rental_count > 250;
-- Q10 Within the film table, how many rating categories are there? And what rating has the most
-- movies total?
SELECT COUNT (DISTINCT (rating))
FROM film
ORDER BY COUNT (ratings) DESC;
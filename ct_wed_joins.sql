--Q1. List all customers who live in Texas
SELECT c.customer_id,
    c.first_name,
    c.last_name
FROM customer AS c
    JOIN address AS a ON c.address_id = a.address_id
WHERE a.postal_code = 'TX';
--Q2 Get all payments above $6.99 with customer full name
SELECT CONCAT(c.first_name, ' ', c.last_name) AS full_name,
    p.amount
FROM payment AS p
    JOIN customer AS c ON p.cust_id = c.cust_id
WHERE p.amount > 6.99;
--Q3 Show all customers names who have made payments over $175 use subqueries
SELECT CONCAT(c.first_name, ' ', c.last_name) AS full_name
FROM customer AS c
    JOIN (
        SELECT customer_id,
            SUM(amount) AS total_payments
        FROM payment
        GROUP BY customer_id
        HAVING total_payments > 175
    ) AS p ON c.cust_id = p.cust_id;
--Q4 List all customers that live in Nepal use the City table
SELECT c.first_name,
    c.last_name
FROM customer AS c
    JOIN address AS a ON c.address_id = a.address_id
    JOIN city AS ct ON a.city_id = ct.city_id
    JOIN country AS cn ON ct.country = cn.country
WHERE cn.country = 'Nepal';
--Q5 Which staff member had the most transactions
SELECT s.first_name,
    s.last_name AS best_employee,
    COUNT(r.rental_id) AS transaction_count
FROM staff AS s
    JOIN rental AS r ON s.staff_id = r.staff_id
GROUP BY s.first_name,
    s.last_name
ORDER BY transaction_count DESC
LIMIT 1;
--Q6 How many movies of each rating are there
SELECT f.rating,
    COUNT(i.film_id) AS movie_count
FROM film AS f
    LEFT JOIN inventory AS i ON f.film_id = i.film_id
GROUP BY f.rating
ORDER BY f.rating;
--Q7 Show all customers who have made a single payment above 6.88 use sub queries
--Q8 how many free rentals did our stores give away?
SELECT c.store_id,
    COUNT(p.payment_id) AS free_rental_count
FROM customer AS c
    LEFT JOIN payment AS p ON c.customer_id = p.customer_id
WHERE p.amount = 0
GROUP BY c.store_id;
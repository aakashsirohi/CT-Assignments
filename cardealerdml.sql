INSERT INTO Salesperson (SalespersonID, FirstName, LastName, Phone, Email)
VALUES (
        1,
        'John',
        'Smith',
        '555-123-4567',
        'john.smith@example.com'
    ),
    (
        2,
        'Alice',
        'Johnson',
        '555-987-6543',
        'alice.johnson@example.com'
    ),
    (
        3,
        'David',
        'Brown',
        '555-567-8901',
        'david.brown@example.com'
    ),
    (
        4,
        'Emily',
        'Davis',
        '555-234-5678',
        'emily.davis@example.com'
    ),
    (
        5,
        'Michael',
        'Wilson',
        '555-876-5432',
        'michael.wilson@example.com'
    );
INSERT INTO Customer (CustomerID, FirstName, LastName, Phone, Email)
VALUES (
        1,
        'Samantha',
        'Clark',
        '555-123-4567',
        'samantha.clark@example.com'
    ),
    (
        2,
        'Daniel',
        'Martinez',
        '555-987-6543',
        'daniel.martinez@example.com'
    ),
    (
        3,
        'Olivia',
        'Taylor',
        '555-567-8901',
        'olivia.taylor@example.com'
    ),
    (
        4,
        'Ethan',
        'Harris',
        '555-234-5678',
        'ethan.harris@example.com'
    ),
    (
        5,
        'Isabella',
        'Anderson',
        '555-876-5432',
        'isabella.anderson@example.com'
    );
INSERT INTO Car (vin, Make, Model, c_Year, Price)
VALUES (
        'VIN123456789',
        'Toyota',
        'Camry',
        2022,
        25000.00
    ),
    ('VIN987654321', 'Ford', 'F-150', 2021, 35000.00),
    ('VIN456789123', 'Honda', 'Civic', 2020, 20000.00),
    (
        'VIN789123456',
        'Chevrolet',
        'Silverado',
        2021,
        38000.00
    ),
    (
        'VIN654321987',
        'Nissan',
        'Altima',
        2022,
        26000.00
    );
INSERT INTO Invoice (
        InvoiceID,
        SalespersonID,
        CustomerID,
        vin,
        Date,
        Amount
    )
VALUES (1, 1, 1, 'VIN123456789', '2023-11-01', 25000.00),
    (2, 2, 2, 'VIN987654321', '2023-11-02', 35000.00),
    (3, 3, 3, 'VIN456789123', '2023-11-03', 20000.00),
    (4, 4, 4, 'VIN789123456', '2023-11-04', 38000.00),
    (5, 5, 5, 'VIN654321987', '2023-11-05', 26000.00);
INSERT INTO Service (TicketID, CustomerID, vin, Date, Description)
VALUES (
        1,
        1,
        'VIN123456789',
        '2023-11-01',
        'Oil change and tire rotation'
    ),
    (
        2,
        2,
        'VIN987654321',
        '2023-11-02',
        'Brake inspection'
    ),
    (
        3,
        3,
        'VIN456789123',
        '2023-11-03',
        'AC system check'
    ),
    (
        4,
        4,
        'VIN789123456',
        '2023-11-04',
        'Engine diagnostics'
    ),
    (
        5,
        5,
        'VIN654321987',
        '2023-11-05',
        'Scheduled maintenance'
    );
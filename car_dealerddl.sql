CREATE TABLE Salesperson (
    SalespersonID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Phone VARCHAR(15),
    Email VARCHAR(100)
);
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Phone VARCHAR(15),
    Email VARCHAR(100)
);
CREATE TABLE Car (
    vin VARCHAR(20) PRIMARY KEY,
    Make VARCHAR(50),
    Model VARCHAR(50),
    c_Year INT,
    Price VARCHAR
);
CREATE TABLE Invoice (
    InvoiceID INT PRIMARY KEY,
    SalespersonID INT,
    CustomerID INT,
    vin VARCHAR(20),
    Date DATE,
    Amount INT,
    FOREIGN KEY (SalespersonID) REFERENCES Salesperson(SalespersonID),
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    FOREIGN KEY (vin) REFERENCES Car(vin)
);
CREATE TABLE service (
    TicketID VARCHAR PRIMARY KEY,
    CustomerID VARCHAR,
    vin VARCHAR(20),
    Date DATE,
    Description VARCHAR,
    FOREIGN KEY (vin) REFERENCES Car(vin)
);
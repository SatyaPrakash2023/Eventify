Drop database if exists Eventify; 
create Database  Eventify;
Use Eventify;
Create table UserSignup(UserId varchar(100) primary key,FirstName varchar(100),
LastName varchar(100),MobileNo varchar(100),Email varchar(100),UserName varchar(100) unique,DateOfBirth date,Gender enum('Male','Female','Other'),Status enum('Active','InActive'),
Created_at datetime,Updated_at datetime,Password_fst varchar(100),Profile_picture VARCHAR(455));


Create table AdminSignup(UserId varchar(100) primary key,FirstName varchar(100),
LastName varchar(100),MobileNo varchar(100),Email varchar(100),UserName varchar(100) unique,DateOfBirth date,Gender enum('Male','Female','Other'),Status enum('Active','InActive'),
Created_at datetime,Updated_at datetime,Password_fst varchar(100),Profile_picture VARCHAR(455));

Create table Password_User(Id int auto_increment primary key,UserName varchar(100) unique Not Null,PassWord_Val varchar(100),Created_at datetime,expires_at datetime,Otp varchar(100));

Create table Password_Admin(Id int auto_increment primary key,UserName varchar(100) unique Not Null,PassWord_Val varchar(100),Created_at datetime,expires_at datetime,Otp varchar(100));

Create table Forgot_Password(Id int auto_increment primary key,UserName varchar(100) unique Not Null,PassWord_Val varchar(100),Requested_at datetime,Otp varchar(100));

Create table Security_Qest(Id int auto_increment primary key,UserName varchar(100) unique Not Null ,Question varchar(500),Answer varchar(200));

CREATE TABLE event_details (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(255) NOT NULL,
    description TEXT,
    event_date DATETIME NOT NULL,
    end_date DATETIME,
    location VARCHAR(255),
    organizer_id varchar(200),
    capacity INT,
    is_public TINYINT(1) DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    banner_image_url VARCHAR(255),
    event_type ENUM('Music', 'Tech', 'Wedding', 'Sports', 'Conference', 'Other') DEFAULT 'Other',
    status ENUM('upcoming', 'ongoing', 'completed', 'cancelled') DEFAULT 'upcoming',
    FOREIGN KEY (organizer_id) REFERENCES AdminSignup(UserId)
);

CREATE TABLE event_registrations (
    registration_id INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT NOT NULL,
    user_Name varchar(200) NOT NULL,
    registration_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('registered', 'cancelled', 'attended') DEFAULT 'registered',
    FOREIGN KEY (event_id) REFERENCES event_details(event_id),
    FOREIGN KEY (user_Name) REFERENCES UserSignup(UserName) -- or AdminSignup(UserId) if only admins
);

CREATE TABLE tickets (
    ticket_id INT AUTO_INCREMENT PRIMARY KEY,
    registration_id INT NOT NULL,
    ticket_number VARCHAR(200) UNIQUE,
    seat_number VARCHAR(50),
    price DECIMAL(10,2) DEFAULT 0.00,
    status ENUM('valid', 'cancelled', 'used') DEFAULT 'valid',
    issue_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (registration_id) REFERENCES event_registrations(registration_id)
);

CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name varchar(200) NOT NULL,
    Ticket_Number varchar(200) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    payment_status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
    payment_method VARCHAR(50),
    transaction_id VARCHAR(100) UNIQUE,
    payment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_name) REFERENCES UserSignup(UserName),
    FOREIGN KEY (Ticket_Number) REFERENCES tickets(ticket_number)
);








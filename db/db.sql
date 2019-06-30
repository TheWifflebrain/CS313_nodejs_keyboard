CREATE TABLE person
(
    user_id SERIAL NOT NULL PRIMARY KEY,
    fName VARCHAR(25) NOT NULL,
    lName VARCHAR(25) NOT NULL,
    email VARCHAR(60) NOT NULL,
    username VARCHAR(30) NOT NULL UNIQUE,
    passwordP VARCHAR(200) NOT NULL
);

CREATE TABLE keyboard
(
    keyboard_id SERIAL PRIMARY KEY,
    keyboardName VARCHAR(50) NOT NULL,
    switch VARCHAR(40),
    size VARCHAR(20),
    typeK VARCHAR(20),
    descriptionK TEXT NOT NULL,
    photo VARCHAR(500),
    usernameK VARCHAR(30),
    FOREIGN KEY (usernameK) REFERENCES person(username)
);

CREATE TABLE switches
(
    switch_id SERIAL PRIMARY KEY,
    switchName VARCHAR(40) NOT NULL,
    typeS VARCHAR(40),
    travel VARCHAR(20),
    actuation VARCHAR(20),
    bottomOut VARCHAR(20),
    photo VARCHAR(500),
    usernameS VARCHAR(30),
    FOREIGN KEY (usernameS) REFERENCES person(username)
);

CREATE TABLE caps
(
    cap_id SERIAL PRIMARY KEY,
    capName VARCHAR(50) NOT NULL,
    material VARCHAR(40),
    descriptionC TEXT,
    photo VARCHAR(500),
    usernameC VARCHAR(30),
    FOREIGN KEY (usernameC) REFERENCES person(username)
);

INSERT INTO person(fName, lName, email, username, passwordP)
VALUES('Dave', 'Jeff', 'helloworld1@gmail.com', 'helloWorld1', 'password1');

INSERT INTO person(fName, lName, email, username, passwordP)
VALUES('Davis', 'Jeffs', 'helloworld2@gmail.com', 'helloWorld2', 'password2');

INSERT INTO keyboard(keyboardName, switch, size, typeK, descriptionK, photo, usernameK)
VALUES('Kira Keyboard', 'Kailh Silver', '95%', 'Pre-Built', 'The Kira keyboard with DSA type keycaps', 'https://www.pcgamesn.com/wp-content/uploads/2019/04/Kira-Mechanical-Keyboard-1-900x506.jpg', 'helloWorld1');

INSERT INTO keyboard(keyboardName, switch, size, typeK, descriptionK, photo, usernameK)
VALUES('Massdrop Alt', 'YOK Trash Pandas', '65%', 'Pre-Built', 'The Massdrop Alt keyboard with yok trash pandas', 'https://emailtuna.com/images/newsletter/9cf/9cf7e57ccab783cbecda549abce8de84.png', 'helloWorld2');

INSERT INTO switches(switchName, typeS, travel, actuation, bottomOut, photo, usernameS)
VALUES('Kailh Silver', 'Linear', '1.1mm', '50g', '70g', 'https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Silver_Plate_1024x1024@2x.jpg?v=1558705974', 'helloWorld1');

INSERT INTO caps(capName, material, descriptionC, photo, usernameC)
VALUES('Blank blue keycap', 'PBT', 'Blank blue oem profile keycaps', 'https://cdn.shopify.com/s/files/1/1473/3902/products/6_aac9170c-3ecd-4ec2-bca3-9bda42cbf393_1800x1800.jpg?v=1556014396', 'helloWorld1');
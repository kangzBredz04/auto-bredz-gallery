----- USER -----
-- CREATE TABLE USERS
create table users(
	id serial primary key,
	name text,
	email text,
	password text
);
-- INSERT INTO USERS
insert into users (name, email, password)
VALUES
  ('Wahyu Jebredz', 'admin@gmail.com', 'admin123'),
  ('Romi', 'romi@gmail.com', 'romi123'),
  ('Abdul Hafiz Tanjung', 'hafiz@gmail.com', 'baikpak');
 
 
 
 ----- CARS -----
-- CREATE TABLE CARS
create table cars (
	id serial primary key,
	brand text,
	model text,
	year int,
	price int,
	image text
)
-- INSERT TABLE CARS
insert into cars (brand, model, year, price, image)
values
  ('Toyota', 'Camry', 2022, 35000.00, 'https://www.toyota.astra.co.id/sites/default/files/2021-12/camry-2021.png'),
  ('Honda', 'Civic', 2022, 30000.00, 'https://asset.honda-indonesia.com/variants/images/ClpMBuYMfsk7YAjoogEvb3WT8OKGZoHf8Qkoc1yC.png'),
  ('Ford', 'Mustang', 2022, 45000.00, 'https://ford.co.id/wp-content/webp-express/webp-images/uploads/2023/07/6-Sedona-Orange.png.webp');
 
 

 ----- COMMENTS -----
 -- CREATE TABLE COMMENTS
create table comments (
  id serial primary key,
  id_car int references cars(id) on delete cascade,
  email_user text references users(email) on delete cascade,
  comment text
);
-- INESRT TABLE COMMENTS
insert into comments (car_id, email_user, comment)
values
(1, 'romi@gmail.com', 'Ini mobil bagus.'),
(2, 'hafiz@gmail.com', 'Rabbani Passwordnyaaa'),
(3, 'romi@gmail.com', 'Tidak terlalu suka dengan mobil ini.');



----- LIKES -----
-- CREATE TABLE LIKES
create table favorit (
  id serial primary key,
  car_id int references cars(id) on delete cascade,
  email_user text references users(email) on delete cascade
);
-- INSER TABLE LIKES
insert into favorit (car_id, email_user)
values
(2, 'hafiz@gmail.com'),
(3, 'romi@gmail.com'),
(1, 'hafiz@gmail.com');

 
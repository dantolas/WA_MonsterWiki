use kuta;
create table users(
    id int PRIMARY KEY IDENTITY(1,1),
    username varchar(30) not null,
    email VARCHAR(40) not null,
    passHash varchar(50) not null
);

insert into users(username,email,passHash) values('a','a@domain.com','1234');

select * from users;
create database burgers_db;

use burgers_db;

create table myburgers(
id integer(20) auto_increment not null,
burger_name varchar (10) not null,
devoured boolean default false,
primary key(id)

);


select * from myburgers;

insert into myburgers(burger_name, devoured) value ('chicken burger', false);
insert into myburgers(burger_name, devoured) value ('ham burger', false);
insert into myburgers(burger_name, devoured) value ('cheese burger', false);
insert into myburgers(burger_name, devoured) value ('cheesesteak burger', false);

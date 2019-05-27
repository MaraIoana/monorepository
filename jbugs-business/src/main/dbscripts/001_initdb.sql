-- create tables

create table users
(
	ID bigint auto_increment
		primary key,
	counter int null,
	email varchar(255) not null,
	first_name varchar(255) not null,
	last_name varchar(255) not null,
	mobile_number varchar(255) not null,
	password varchar(255) not null,
	username varchar(255) not null
)
;

create table bugs
(
	ID bigint auto_increment
		primary key,
	title varchar(255) not null,
	description varchar(250) not null,
	version varchar(255) not null,
	targetDate datetime null,
	status varchar(255) not null,
	fixedVersion varchar(255) null,
	severity varchar(255) not null,

	createdByUser bigint not null,
	assignedTo bigint not null,

	constraint FK_created_by_user_id
		foreign key (createdByUser) references users (ID),

	constraint FK_assigned_to_user_id
		foreign key (assignedTo) references users (ID)
)
;

create table roles
(
	ID bigint auto_increment
		primary key,
	type varchar(255) not null
)
;

create table users_roles
(
	user_id bigint not null,
	role_id bigint not null,
	primary key (user_id, role_id),
	constraint FK_users_roles_role_id
		foreign key (role_id) references roles (ID),
	constraint FK_users_roles_user_id
		foreign key (user_id) references users (ID)
)
;

create table permission
(
	ID bigint auto_increment
		primary key,
	description varchar(255) not null,
	type varchar(255) not null
)
;

create table permissions_roles
(
	role_id bigint not null,
	permission_id bigint not null,
	primary key (role_id, permission_id),
	constraint FK_permissions_roles_permission_id
		foreign key (permission_id) references permission (ID),
	constraint FK_permissions_roles_role_id
		foreign key (role_id) references roles (ID)
)
;

create table notifications
(
	ID bigint auto_increment
		primary key,
	date datetime null,
	message varchar(255) null,
	type varchar(255) null,
	url varchar(255) null,
	user_id bigint null
)
;


create table comment
(
	text varchar(1000) null,
	date datetime null
)
;


-- insert data
INSERT INTO msg_training.bugs (ID, title, description, version, targetDate,status, fixedVersion, severity,createdByUser, assignedTo) VALUES (20, 'Bug1', 'prima descriere', 'A001', '2019/03/09', 'FIXED', 'A002', 'HIGH',5,1);
INSERT INTO msg_training.bugs (ID, title, description, version, targetDate,status, fixedVersion, severity,createdByUser, assignedTo) VALUES (21, 'Bug2', 'alta descriere', 'X001', '2018/05/09', 'CLOSED', 'K1002', 'LOW',9,10);
INSERT INTO msg_training.bugs (ID, title, description, version, targetDate,status, fixedVersion, severity,createdByUser, assignedTo) VALUES (22, 'Bug3', 'tot aia', 'P001','2019/03/04', 'INPROGRESS', 'O019', 'NEW',1,7);

INSERT INTO msg_training.users (ID, counter, email, first_name, last_name, mobile_number, password, username) VALUES (1, 0, 'admin@admin.com', 'Viorica', 'Administrator', '0700000000', 'admin', 'admin');
INSERT INTO msg_training.users (ID, counter, email, first_name, last_name, mobile_number, password, username) VALUES (5, 0, 'pm@pm.com', 'Serban', 'Manager', '0700000000', 'pm', 'pm');
INSERT INTO msg_training.users (ID, counter, email, first_name, last_name, mobile_number, password, username) VALUES (6, 0, 'tm@tm.com', 'Mihai', 'TestManager', '0700000000', 'tm', 'tm');
INSERT INTO msg_training.users (ID, counter, email, first_name, last_name, mobile_number, password, username) VALUES (7, 0, 'dev@dev.com', 'Andreea', 'Developer', '0700000000', 'dev', 'dev');
INSERT INTO msg_training.users (ID, counter, email, first_name, last_name, mobile_number, password, username) VALUES (8, 0, 'tst@tst.com', 'Gheorghe', 'Tester', '0700000000', 'tester', 'tester');

INSERT INTO msg_training.roles (ID, type) VALUES (1, 'ADMINISTRATOR');
INSERT INTO msg_training.roles (ID, type) VALUES (2, 'PROJECT MANAGER');
INSERT INTO msg_training.roles (ID, type) VALUES (3, 'TEST MANAGER');
INSERT INTO msg_training.roles (ID, type) VALUES (4, 'DEVELOPER');
INSERT INTO msg_training.roles (ID, type) VALUES (5, 'TESTER');

INSERT INTO msg_training.users_roles (user_id, role_id) VALUES (1, 1);
INSERT INTO msg_training.users_roles (user_id, role_id) VALUES (5, 2);
INSERT INTO msg_training.users_roles (user_id, role_id) VALUES (6, 3);
INSERT INTO msg_training.users_roles (user_id, role_id) VALUES (7, 4);
INSERT INTO msg_training.users_roles (user_id, role_id) VALUES (8, 5);

INSERT INTO msg_training.permission (ID, description, type) VALUES (1, 'Can modify role assignment.', 'PERMISSION_MANAGEMENT');
INSERT INTO msg_training.permission (ID, description, type) VALUES (2, 'Can modify users.', 'USER_MANAGEMENT');
INSERT INTO msg_training.permission (ID, description, type) VALUES (3, 'Can modify bugs.', 'BUG_MANAGEMENT');

INSERT INTO msg_training.permissions_roles (role_id, permission_id) VALUES (1, 1);
INSERT INTO msg_training.permissions_roles (role_id, permission_id) VALUES (1, 2);
INSERT INTO msg_training.permissions_roles (role_id, permission_id) VALUES (2, 2);
INSERT INTO msg_training.permissions_roles (role_id, permission_id) VALUES (2, 3);


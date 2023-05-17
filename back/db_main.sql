create table j_Position(
    id SERIAL primary key,
    a_Position varchar(255) not null
);

create table vacancy(
    id SERIAL primary key,
    name_vacancy varchar(255) not null,
    salary integer not null,
    shedule_vacancy VARCHAR(32) not null,
    type_work  VARCHAR(255) not NULL,
    state_of_vacancy VARCHAR(255) not null,
    position_id INTEGER not null,
    comp_id INTEGER not NULL,
    FOREIGN KEY (position_id) REFERENCES j_Position (id),
    FOREIGN KEY (comp_id) REFERENCES company (id)


);

create table finders(
    id serial PRIMARY KEY,
    full_name_fndr VARCHAR(255) not null,
    nik_name VARCHAR(255) not null,
    pwd VARCHAR(255) not null,
    experience VARCHAR(255),
    portfolio VARCHAR(512),
    city VARCHAR(512),
    phone VARCHAR(512),
    email VARCHAR(512),
    position_id INTEGER not null,
    image_pers VARCHAR,
    FOREIGN KEY (position_id) REFERENCES j_Position (id)
);
create table education(
    id serial PRIMARY KEY,
    edu VARCHAR(255) not null,
    edu_dept VARCHAR(255) not null,
    pers_id INTEGER not null,
    FOREIGN KEY (pers_id) REFERENCES finders (id)

);
create table company(
    id serial PRIMARY KEY,
    company_name VARCHAR(255) not null,
    nik_name VARCHAR(255) not null,
    pwd VARCHAR(255) not null,
    ogrn VARCHAR(13) not null,
    adress_comp VARCHAR(255) not null,
    type_comp VARCHAR(255) not null,
    sfera_deyatel VARCHAR(255) not null,
    vakansii VARCHAR(255) not null,
    contacts__comp VARCHAR(255) not null,
    company_info VARCHAR(255) not null,
    rathing VARCHAR(10) not null,
    

);
--
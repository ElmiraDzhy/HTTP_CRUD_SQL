CREATE TABLE boats
(
    id                 serial PRIMARY KEY,
    name               varchar(300) NOT NULL CHECK ( name != '' ),
    is_sea_able        boolean      NOT NULL,
    created_at         date         NOT NULL CHECK ( created_at < current_date ),
    water_displacement int CHECK ( water_displacement > 0 ),
    max_speed          int          NOT NULL,
    owner_id           int NOT NULL REFERENCES users (id)
);

-- INSERT INTO boats (name, is_sea_able, created_at, water_displacement, max_speed) VALUES ();

CREATE TABLE users
(
    id           serial PRIMARY KEY,
    first_name   varchar(64)  NOT NULL CHECK ( first_name != '' ),
    last_name    varchar(64)  NOT NULL CHECK ( last_name != '' ),
    email        varchar(300) NOT NULL CHECK ( email != '' ),
    boat_license int
);

DELETE
FROM boats
WHERE true;


INSERT INTO boats (name, is_sea_able, max_speed, created_at, owner_id)
VALUES ('ee2', false, 500, '2007-09-09', 1);

INSERT INTO users (first_name, last_name, email, boat_license) VALUES ('test', 'test', 'ewdewde', 68465);

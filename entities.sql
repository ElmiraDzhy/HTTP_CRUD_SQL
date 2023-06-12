CREATE TABLE boats
(
    id                 serial PRIMARY KEY,
    name               varchar(300) NOT NULL CHECK ( name != '' ),
    is_sea_able        boolean      NOT NULL,
    created_at         date         NOT NULL CHECK ( created_at < current_date ),
    water_displacement int CHECK ( water_displacement > 0 ),
    max_speed          int          NOT NULL
);

-- INSERT INTO boats (name, is_sea_able, created_at, water_displacement, max_speed) VALUES ();
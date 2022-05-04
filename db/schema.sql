DROP DATABASE IF EXISTS take_home_challenge
CREATE DATABASE take_home_challenge

\c take_home_challenge

DROP TABLE IF EXISTS study_groups
CREATE TABLE study_groups (
    study_group_id SERIAL PRIMARY KEY
    name TEXT NOT NULL UNIQUE,
    main_focus TEXT,
    formed DATETIME,
    contact TEXT,
    userid INT REFERENCES users(userid)
);

DROP TABLE IF EXISTS events
CREATE TABLE events (
    eventid SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    virtual_meeting_link TEXT,
    study_group_id FOREIGN KEY NOT NULL,
    start_time DATETIME,
    end_time DATETIME,
    number_of_attendees INT,
    cancelled BOOLEAN DEFAULT false,
);

-- DROP TABLE IF EXISTS users
-- CREATE TABLE users (
--     userid SERIAL PRIMARY KEY
--     username TEXT NOT NULL,
--     first_name TEXT,
--     last_name TEXT,
--     password TEXT NOT NULL,
--     email TEXT NOT NULL UNIQUE,
-- );

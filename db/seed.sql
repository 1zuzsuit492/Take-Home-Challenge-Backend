\c take_home_challenge;

INSERT INTO groups (study_group_id, name, main_focus, formed, contact) VALUES
(1, 'Brooklyn Tech Meetup', 'React', '10-12-2021','brooklyntech@cuny.edu'),
(2, 'ScriptKiddies', 'Javascript', '03-30-2022','scriptkiddies@js.net'),
(3, 'Geeksquad', 'Software Troubleshooting', '05-04-2022','geeksquad@geeksquad.com'),
(4, 'The GameHers', 'Game Development', '04-30-2022','thegamehers@thegamehers.org'),
(5, 'ABBSMD', 'Full-Stack Devs', '06-17-2021','abbsmd@abbsmd.com');

INSERT INTO events (eventid, name, virtual_meeting_link, start_time, end_time, number_of_attendees, study_group_id) VALUES
(1, '2021 Professional Bootcamp', 'https://www.twitch.tv/2021bootcamp','12:00 PM', '6:00 PM', 1111, 1),
(2, 'Dream Stream', 'https://www.twitch.tv/dreamstream22','3:00 PM', '11:00 PM', 2222, 2),
(3, 'DevTernity', 'https://www.zoom.us/1zuzsuit492', '9:00 AM', '6:00 PM', 3333, 3),
(4, 'NYC Dev Week', 'https://www.zoom.us/nycdevs', '10:00 AM', '7:00 PM', 5555, 4);

-- INSERT INTO users (userid, username, first_name, last_name, password, email) VALUES
-- (1, '1zuzsuit492', 'Melissa', 'Lopez', 'RamScorpionFish333!', 'mel.lopez30@gmail.com'),
-- (2, 'Hippiex45', 'Poland', 'Spring', 'redpowerranger5', 'poison.hippie@gmail.com'),
-- (3, 'tomb5961', 'Chris', 'Morales', 'Sp@Wn25', 'heyImChris@gmail.com'),
-- (4, 'virgoNation0904', 'Candida', 'Julian', 'Melissa1995!?', 'candida.julian904@gmail.com'),
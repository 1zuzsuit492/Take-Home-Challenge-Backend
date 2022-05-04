const db = require("../db/dbConfig.js");

const getAllGroups = async () => {
try {
const allGroups = await db.any("SELECT * FROM groups;");
return allGroups;
} 
catch (err) {
return err;
}
}; //all groups

const getOneGroup = async (gid) => {
try {
const oneGroup = await db.one("SELECT * FROM groups WHERE id=$1;", gid);
return oneGroup;
} 
catch (err) {
return err;
}
}; //one group

const createGroup = async (group) => {
try {
const newGroup = await db.one("INSERT INTO groups (name, main_focus, date_formed, contact_email) VALUES($1, $2, $3, $4) RETURNING *",
[group.name, group.main_focus, group.date_formed, group.contact_email]);
return newGroup;
} 
catch (err) {
return err;
}
}; //create group

const updateGroup = async (gid, group) => {
try {
const updatedGroup = await db.one("UPDATE groups SET name=$1, main_focus=$2, date_formed=$3, contact=$4 WHERE study_group_id=$5 RETURNING *", [group.name, group.main_focus, group.date_formed, group.contact_email, gid,]);
return updatedGroup;
} 
catch (err) {
return err;
} 
}; //edit group

const getEventsByGroupId = async (gid) => {
try {
const group = await db.any("SELECT * FROM events WHERE study_group_id = $1", gid);
return group;
}
catch (err) {
return err;
}
}; //events by group id

const createEvent = async (event) => {
try {
const newEvent = await db.one(
"INSERT INTO events (name, virtual_meeting_link, start_time, end_time, number_of_attendees, study_group_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [event.name, event.virtual_meeting_link, event.start_time, event.end_time, event.study_group_id,]);
return newEvent;
} 
catch (err) {
return err;
}
}; //create an event

module.exports = {
  getAllGroups,
  getOneGroup,
  createGroup,
  updateGroup,
  getEventsByGroupId,
  createEvent,
};
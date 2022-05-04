const express = require("express");
const { getAllGroups, getOneGroup, createGroup, updateGroup, getEventsByGroupId, createEvent} = require("../queries/groups.js");

const groups = express.Router();

groups.get("/", async (request, response) => {
const groups = await getAllGroups();
response.send(groups);
});

groups.post("/", async (request, response) => {
  let group = request.body;
try {
const newGroup = await createGroup(group);
response.status(200).send(newGroup);
} 
catch (error) {
response.status(404).send({ error: "Your group cannot be created." });
}
});

groups.get("/:gid", async (request, response) => {
  const { gid } = request.params;
  try {
    const group = await getOneGroup(gid);
    response.status(200).send(group);
  } catch (error) {
    response.status(404).send({ error: "Can't find your group." });
  }
});

groups.put("/:gid", async (request, response) => {
  const { gid } = request.params;
  console.log(gid);
try {
const updatedGroup = await updateGroup(gid, request.body);
response.status(200).send(updatedGroup);
} 
catch (error) {
response.status(404).send({ error: "This group cannot be modified." });
}
});

groups.get("/:gid/events", async (request, response) => {
  const { gid } = request.params;
  try {
    const group = await getEventsByGroupId(gid);
    console.log(group);
    response.status(200).send(group);
  } catch (error) {
    response.status(404).send({ error: "This group cannot be found" });
  }
});

groups.post("/:gid/events", async (request, response) => {
  let event = request.body;
  console.log(event);
  try {
    const newEvent = await createEvent(event);
    response.status(200).send(newEvent);
  } catch (error) {
    response.status(404).send({ error: "Event cannot be created" });
  }
});

module.exports = groups;
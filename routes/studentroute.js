const express = require("express");
const fs = require("fs");
const path = require("path");

const studentrouter = express.Router();
const filePath = path.join(__dirname, "../data/students.json");

// Read Route ---> GET
studentrouter.get("/read", (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.status(200).send(data);
});

// Create Route ---> POST
studentrouter.post("/create", (req, res) => {
  const payload = req.body;
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  data.student.push(payload);
  fs.writeFileSync(filePath, JSON.stringify(data));
  res.status(201).send({ msg: "New student Registered successfully" });
});

// Full Update ---> PUT
studentrouter.put("/update/:id", (req, res) => {
  const payload = req.body;
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  data.student = data.student.map((el) =>
    el.id == req.params.id ? payload : el
  );
  fs.writeFileSync(filePath, JSON.stringify(data));
  res.status(200).send({ msg: "Student record updated successfully" });
});

// Partial Update ---> PATCH
studentrouter.patch("/update/:id", (req, res) => {
  const payload = req.body;
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  data.student = data.student.map((el) =>
    el.id == req.params.id ? { ...el, ...payload } : el
  );
  fs.writeFileSync(filePath, JSON.stringify(data));
  res.status(200).send({ msg: "Student record partially updated successfully" });
});

// Delete Route ---> DELETE
studentrouter.delete("/delete/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  data.student = data.student.filter((el) => el.id != req.params.id);
  fs.writeFileSync(filePath, JSON.stringify(data));
  res.status(200).send({ msg: "Student record deleted successfully" });
});

module.exports = { studentrouter };
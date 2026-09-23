const express = require("express");
const app = express();

const { studentrouter } = require("./routes/studentroute");
const { loggerMiddleware } = require("./middleware/logger");

const PORT = 3030;

app.use(express.json());
app.use(loggerMiddleware);
app.use("/student", studentrouter);

app.listen(PORT, () => {
  console.log(`Server started on: ${PORT}`);
});
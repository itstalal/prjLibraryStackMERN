require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Bienvenue");
});

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});

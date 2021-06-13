const express = require("express");
const db = require("../config/connection");

const app = express();

const PORT = process.env.PORT || 3000;

db.authenticate()
.then(()=>console.log('Connected to db successfully'))
.catch(err=>console.log(err))

app.get("/", (req, res) => {
  res.send("wtf");
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});

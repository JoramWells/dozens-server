const express = require("express");
const productRoutes = require("../routes/product");
const db = require("../config/connection");
const { urlencoded, json } = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/',productRoutes)
db.authenticate()
  .then(() => console.log("Connected to db successfully"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("wtf");
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});

const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.get("/products", (req, res) => {
  Product.findAll({ order: [["updatedAt", "DESC"]] })
    .then((products) => {
      res.send(products);
    })
    .catch((err) => console.log(err));
});

module.exports = router
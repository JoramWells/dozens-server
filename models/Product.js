const Sequelize = require("sequelize");
const db = require("../config/connection");

const Product = db.define("product", {
  product_name: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  stock: {
    type: Sequelize.INTEGER,
  },
  shop: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  ratings: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  likes: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Product;

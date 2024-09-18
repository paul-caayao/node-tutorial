const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Hello world! I am Paul Caayao");
});

// routes
app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://paulcaayao:mA1miEWx5qmV2xgY@backenddb.zwnzo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

  
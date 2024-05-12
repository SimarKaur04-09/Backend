const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Product-App")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true
  },
  product_price: {
    type: Number,
    required: true
  },
  product_description: {
    type: String,
    required: true
  },
  product_quantity: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model("Product", productSchema);

app.use(express.urlencoded({ extended: false }));

app.post("/api/products", async (req, res) => {
  const body = req.body;
  try {
    const result = await Product.create({
      product_name: body.product_name,
      product_price: body.product_price,
      product_description: body.product_description,
      product_quantity: body.product_quantity
    });
    console.log("Product created:", result);
    return res.status(200).json({ msg: "Product created successfully" });
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(7000, () => {
  console.log("Server is running on port 5000");
});

const express = require("express");
const routes = express.Router();
const mongoose = require("mongoose");
const User = require("../model/product");
var path = require("path");
var cloudinary = require("cloudinary").v2;
var { fileURLToPath } = require("url");
cloudinary.config({
  cloud_name: "dqdpio4xn",
  api_key: "467147114767511",
  api_secret: "o_sJvKKf2sDscXqQYVg1Ar0pwZA",
});
// get All Data
routes.get("/", async (req, res) => {
  try {
    const UserData = await User.find({});

    res.status(200).json({
      Product_Data: UserData,
    });
  } catch (error) {
    console.log(error);
  }
});
// delete Data
routes.delete("/:id", async (req, res, next) => {
  try {
    await User.findOneAndDelete({
      _id: req.params.id,
    });
    res.send("product delete successfully");
  } catch (error) {
    console.log("error");
  }
});
// get data on the base   of product ID////
routes.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        ProductData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
// get data on the base  specific  category of product////
routes.get("/product/:productcategory/:pageNumber", async (req, res, next) => {
  console.log(req.params.pageNumber, "sdjkfhdfjskhk");
  let limit = 5;
  let skip = (req.params.pageNumber - 1) * limit;
  console.log(req.params.productcategory);
  let result = await User.find({
    productcategory: req.params.productcategory,
  })
    .skip(skip)
    .limit(limit);
  return res.status(200).json({
    ProductData: result,
  });
});
// get number of data in DB
routes.get("/data/:productcategory", async (req, res, next) => {
  let result = await User.find({
    productcategory: req.params.productcategory,
  }).count();

  return res.status(200).json({
    ProductData: result,
  });
});
// let result = await User.count();
// for post Data
routes.post("/", (req, res) => {
  const file = req.files.img;

  cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    console.log(result);

    const product = new User({
      _id: new mongoose.Types.ObjectId(),
      productName: req.body.productName,
      productDescription: req.body.productDescription,
      productPrice: req.body.productPrice,
      productcategory: req.body.productcategory,
      productImage: result.url,
    });
    product
      .save()
      .then((result) => {
        console.log(result);
        res.status(200).json({
          product: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  });
});
/////Updating specific Product on the base of ID/////////

routes.patch("/:id", (req, res, next) => {
  console.log("id");
  const file = req.files.img;
  cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          productName: req.body.productName,
          productDescription: req.body.productDescription,
          productPrice: req.body.productPrice,
          productcategory: req.body.productcategory,
          productImage: result.url,
        },
      }
    )
      .then((result) => {
        console.log(result);
        res.status(200).json({
          updatedData: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  });
});

module.exports = routes;

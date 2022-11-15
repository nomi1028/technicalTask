const mongoose = require("mongoose");
//////////////create schema
//////defining datatype
const userSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  productName: String,
  productDescription: String,
  productPrice: String,
  productImage: String,
  productcategory: String,
});
/////////////create  Actor model(collection)& here Actor is collection and actorschema is a schema
module.exports = mongoose.model("ProductCollection", userSchema);

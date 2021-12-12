const express = require("express");
const { signup, signin } = require("../controller/user");
const router = express.Router();
const AllUser = require("../models/userSchema");
const { addProducts ,showProducts, productParamId } = require("../controller/product");
const {addCategory , addSubCategory , addCategoryOrSubCategory} = require("../controller/addCategory");
const { addItemCart , showCartItems , DeleteCartItems } = require("../controller/addCart");

router.post("/signin" , signin);

router.post("/signup" , signup);

router.post("/productadd" , addProducts);

router.get("/products" , showProducts);

router.post("/productid" , productParamId);

// router.post("/addcategory" , addCategory);

// router.post("/addsubcategory" , addSubCategory);

router.post("/addcategoryorsub" , addCategoryOrSubCategory);

router.post("/additemcart" , addItemCart);

router.post("/showcartitems" , showCartItems);

router.post("/deletecartitems" , DeleteCartItems);

module.exports = router;
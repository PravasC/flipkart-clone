const AllProduct = require("../models/ProductSchema");

exports.addProducts = async(req,res) => {
    const {productName,imageLink,brandName,category,subCategory,review,rating,numOfreview,price,countOfStock,productOffers,productColors,productServices,productExtraOne} = req.body;

    if(!productName||!imageLink||!brandName||!category||!subCategory||!price||!countOfStock||!productOffers||!productColors){
        res.status(400).json({messege:"Please Fill All The Feild"});
    }else{
        try{

            const ProductExist = await AllProduct.findOne({productName:productName});

            if(ProductExist){
                res.status(402).json({messege:"The Product Already Added"});
            }else{
                const newProductAdd = new AllProduct({
                    productName,imageLink,brandName,category,subCategory,rating,numOfreview,price,countOfStock,productOffers,productColors,productServices,productExtraOne
                });

                const ProductAdded = await newProductAdd.save();

                if(ProductAdded){
                    res.status(200).json({messege:"Product Save Succefully"});
                }

            }

        }catch(err){
            res.status(401).json({messege:"Something Went Wrong"});
            console.log(err)
        }
    }
}

exports.showProducts = async(req,res) => {
    const productAll = await AllProduct.find({});
    res.json(productAll);
}

exports.productParamId = async(req,res) => {

    const {paramId} = req.body;

    try{
        const productOne = await AllProduct.findOne({_id:paramId});
        res.json(productOne);

    }catch(err){
        res.status(400).json({messege:"Not Working"});
    }

}
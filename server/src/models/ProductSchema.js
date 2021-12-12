const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    productName:{
        type:String
    },
    imageLink:{
        type:String
    },
    brandName:{
        type:String
    },
    category:{
        type:String
    },
    subCategory:{
        type:String
    },
    discription:{
        type:String
    },
    review:[{
        userName:{
            type:String
        },
        ratingDiscription:{
            type:String
        },
        userComment:{
            type:String
        }
    }],
    rating:{
        type:Number
    },
    numOfreview:{
        type:String
    },
    price:{
        type:Number
    },
    countOfStock:{
        type:Number
    },
    productOffers:{
        type:String
    },
    productColors:{
        type: String
    },
    productServices:{
        type:String
    },
    productExtraOne:{
        type:String
    }
});

const AllProduct = new mongoose.model("AllProduct",ProductSchema);

module.exports = AllProduct;
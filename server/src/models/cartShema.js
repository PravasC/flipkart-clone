const mongoose = require("mongoose");

const cartShema = new mongoose.Schema({
    userId:{
        type:String
    },
    products:[
        {
            productId:{
                type:String
            },
            productName:{
                type:String
            },
            imageLink:{
                type:String
            },
            price:{
                type:String
            }
        }
    ]
});

cartShema.methods.addProducts = async function(userId,productId,productName,imageLink,price){
    try{

        this.products = this.products.concat({productId,productName,imageLink,price});
        await this.save();
        return this.products;

    }catch(err)
    {
        console.log(err);
    }
}

const CartData = new mongoose.model("cartdata",cartShema);

module.exports = CartData;
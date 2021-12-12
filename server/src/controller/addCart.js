const CartData = require("../models/cartShema");

exports.addItemCart = async(req , res) =>{

        const {productId,productName,imageLink,price} = req.body;
        const userId="618ffa00b1bb51ffbb62b981";
        // console.log(productId,productName,imageLink,price);

        // console.log(userId,productId);

        // res.json({userId,productId});

        try{

            const findUser = await CartData.findOne({userId:userId});
            const findProduct = await CartData.findOne({"products.productId":productId});
            if(findProduct && findUser){
                res.status(400).json({messege:"The Product is already added"});
            }else if(!findUser)
            {
                const addCart = new CartData({
                    userId
                });
                const cartProduct = await addCart.addProducts(userId,productId,productName,imageLink,price);
                if(cartProduct){
                    res.status(200).json({messege:"Cart Added"});
                }
            }else{
                const cartProduct = await findUser.addProducts(userId,productId,productName,imageLink,price);
                if(cartProduct){
                    res.status(201).json({messege:"Cart Added"});
                }
            }

        }catch(err)
        {
            console.log(err)
        }
}

exports.showCartItems = async(req,res) => {
    try{

        const {userId} = req.body;

        const finduserProducts = await CartData.findOne({userId:userId});

        res.json({finduserProducts});

    }catch(err){
        console.log(err);
    }
}

exports.DeleteCartItems = async(req,res) => {
    const {productId} = req.body;

    const RemonveCart = await CartData.findOneAndUpdate({"products._id":productId},{$pull:{products:{_id:productId}}});

    if(RemonveCart){
        res.status(200).json({messege:"Done"});

    }

}
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId:{
        type:String
    },
    orderItems:[
        {
            name:{
                type:String
            },
            qyantity:{
                type:Number
            },
            image:{
                type:String
            },
            price:{
                type:Number
            },
            productId:{
                type:String
            }
        }
    ],
    shippingAddress:{
        address:{
            type:String
        },
        city:{
            type:String
        },
        postalCode:{
            type:Number
        },
        cuntry:{
            type:String
        }
    },
    paymentMethod:{
        type:String
    },
    paymentResult:{
        id:{type:String},
        status:{type:String},
        update_time:{type:String},
        email_Address:{type:String}
    },
    isPaid:{
        type:Boolean,
        default:false
    },
    deleveryTime:{
        type:Date,
    },
    deleveryStatus:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const AllOrder = new mongoose.model("order",orderSchema);

module.exports = AllOrder;
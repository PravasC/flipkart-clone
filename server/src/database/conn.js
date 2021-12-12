const mongoose = require('mongoose');
const env = require("dotenv");
env.config();
mongoose.connect('mongodb+srv://Pravas:GXDHfB0sXC6Chje5@cluster0.z0idz.mongodb.net/flipcart-project?retryWrites=true&w=majority').
then(() => {
    console.log(`Connection Is Succesful`);
}).catch((err) => {
    console.log(err);
})
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    categoryName:{
        type:String
    },
    subCategorys:[
        {
            subCategory:{
                type:String
            },
            brand:{
                type:String
            }
        }
    ]
});

categorySchema.methods.addsubCat = async function(categoryName,subCategory,brand){
    try{

        this.subCategorys = this.subCategorys.concat({categoryName,subCategory,brand});
        await this.save();
        return this.subCategorys;

    }catch(err)
    {
        console.log(err);
    }
}

const AddCategory = new mongoose.model("allcategory",categorySchema);

module.exports = AddCategory;
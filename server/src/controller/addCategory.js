const AddCategory = require("../models/categorySchema");

// exports.addCategory = async(req,res) => {
    
//     const {categoryName,subCategory,brand} = req.body;

//     try{

//         // const findCategory = await AddCategory.findOne({subCategory:subCategory});
//         // const findBrand = await AddCategory.findOne({brand:brand});
//         const findC = await AddCategory.findOne({categoryName:categoryName});

//         if(findC){
//             res.json({messege:"The Brand Name Already Added"});
//         }else{
//             if(!categoryName){
//                 res.json({messege:"Fill Add The Feild"})
//             }else{
//                 const addCategory = new AddCategory({
//                     categoryName,subCategory,brand
//                 });
    
//                 const CategoryAdded = await addCategory.save();
    
//                 if(CategoryAdded){
//                     res.send("added")
//                 }
//             }
//         }
//     }catch(err)
//     {
//         console.log(err)
//     }

// }

// exports.addSubCategory = async(req,res) =>{
//     const {categoryName,subCategory,brand} = req.body;

//     try{
//             const userContact = await AddCategory.findOne({categoryName});
 
//             if(userContact){
//                 const userMessege = await userContact.addsubCat(categoryName,subCategory,brand);
//                 await userContact.save();
 
//                 if(userMessege)
//                 {
//                     res.status(200).json("messege Sent");
//                     console.log(userMessege);
//                 }
//             }
//      }catch(err){
//          console.log(err);
//      }
// }

exports.addCategoryOrSubCategory = async(req,res) => {
    const {categoryName,subCategory,brand} = req.body;
    
    try{
        if(!categoryName || !subCategory || !brand){
            res.status(401).json({messege:"Please Fill All The Feild"});
        }else{
            const findCategory = await AddCategory.findOne({categoryName:categoryName});
            const findsubCategory = await AddCategory.findOne({"subCategorys.subCategory":subCategory});
            
            if(findCategory && findsubCategory)
            {
                res.status(402).json({messege:"The Category Or Sub Category Already Added"});
            }else if(findCategory){
                const userMessege = await findCategory.addsubCat(categoryName,subCategory,brand);

                if(userMessege)
                {
                    res.status(200).json({messege:"Sub Category Added"})
                }
            }else{
                const addCategory = new AddCategory({
                    categoryName
                });
                const userMessege = await addCategory.addsubCat(categoryName,subCategory,brand);

                if(userMessege)
                {
                    res.status(201).json({messege:"Catagory And Sub Category Added"})
                }
            }
        }

    }catch(err){
        res.status(400).json({messege:err});
        console.log(err);
    }
}
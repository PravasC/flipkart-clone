const AllUser = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//For Register

exports.signup =async (req , res) =>{
    const {firstname , lastname , email , password, cpassword , contactNumber} = req.body;
    let randomNum = (Math.random() + 9).toString(36).substring(2);
    const username = randomNum;
    if(!firstname || !lastname || !email || !password|| !cpassword || !contactNumber)
    {
        return res.status(422).json({error : "Plese Fill All The Feild"});
    }else{
        try{
        
            const userExist = await AllUser.findOne({email:email});

            if(userExist){
                return res.status(423).json({error : "Already have the Email"});
            }else{
                if(password === cpassword){
                    const userSignup = new AllUser({
                        firstname , lastname ,username, email , password , contactNumber
                    });

                    const userRegistred = await userSignup.save();

                    if(userRegistred){
                        res.status(200).json({messege:"Information Saved Successfully"})
                    }else{
                        res.status(401).json({error:"Some Error Happing"});
                    }
                }else{
                    res.status(402).json({error:"Password and Confirm Password Are Not Same"});
                }
            }
    
        }catch(err){
            res.status(400).json({err:err})
        }
    }
}

//For Sign In

exports.signin = async(req,res) =>{
    const {email,password} = req.body;
    if(!email || !password)
    {
        res.status(401).json({messege:"Your Can't empty email or password feild"})
    }else{
        try{

            const userFind = await AllUser.findOne({email:email});
            const id = userFind._id;

            if(userFind){
                const isMatch = await bcrypt.compare(password,userFind.password);

                if(isMatch){
                    // res.status(200).json({messege:"Login Succesfull"});
                    const token = jwt.sign({id},process.env.JWT);
                }else{
                    res.status(400).json({messege:"Passoword invalid"});
                }
            }else{
                res.status(400).json({messege:"Email invalid"});
            }

        }catch(err)
        {
            res.status(400).json({messege:"Something went wrong ! "});
        }
    }
}
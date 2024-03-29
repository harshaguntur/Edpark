import User from "../DB/models/user_model.js";

export const SignUpController = async (req,res)=>{

    // console.log(req.body.formData);
    const {fullname,phone,email,password,college,place} = req.body.formData;

    try {
        await User.create({username:fullname,phone,email,password,college,place});
        
    } catch (error) {
        console.log(error);
    }



}
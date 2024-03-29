import User from "../DB/models/user_model.js";

export const SignInController = async (req, res) => {
  const { userName, userPass } = req.body.formData;


  try {

    const user =  await User.findOne(({username:userName}));


    if(userPass === user.password){
      // console.log("user found");
      res.send({
        userName : "true",
        userPass : "true",
      });


    }

    else{
      res.send({
          userName : "true",
          userPass : "false"
      })
    }





    if(!user){
      res.send({userName : "false"});
      console.log("user not found");

    }




  } catch (error) {
      res.send({userName : "false"});
  }
};

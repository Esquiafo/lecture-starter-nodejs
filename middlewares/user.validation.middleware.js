import { USER } from "../models/user.js";

const validStats = (params) => {
  const phoneRegex = /^\+380.{9}$/
  const emailRegex = /@gmail/

  if (!phoneRegex.test(params.phoneNumber)) {
    return  "Invalid phone";
  }
  
  if (!emailRegex.test(params.email)) {
    return  "Check email";
  }
  if (params.password.length < 3 ) {
    return  "Check password";
  }
};
const createUserValid = (req, res, next) => {
  let userRequest = req.body
  userRequest.id = ''
  console.log(req.body)
  const userKeys = Object.keys(userRequest).sort()
  const modelKeys = Object.keys(USER).sort()
  const validation = JSON.stringify(userKeys) === JSON.stringify(modelKeys)
  if(!userRequest.password || userRequest.password.length < 3 ){
    return res.status(400).json({ error:true, message: "Check password" });
  }
  if(validation){
      const verificationValues = validStats(userRequest)
     if(verificationValues){
      res.json({ error: true, message: verificationValues});
     }else{
      next();
     };
  }else{
    return res.status(400).json({error:true,message: "User entity to create isn’t valid"})
  }
};

const updateUserValid = (req, res, next) => {
  console.log(req.body)
  let userRequest = req.body
  if(!Object.entries(userRequest).length == 0){
    for( const key in userRequest){
      if(!USER.hasOwnProperty(key)){
        return res.status(400).json({message: "User entity to create isn’t valid"})
      }
    }
      const verificationValues = validStats(userRequest)
     if(verificationValues){
      res.json({ error: true, message: verificationValues});
     }else{
      next();
     };
  }else{
    return res.status(400).json({message: "Empty user"})
  }
};

export { createUserValid, updateUserValid };

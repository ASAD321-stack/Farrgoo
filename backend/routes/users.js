const express = require('express');
const bodyParser = require('body-parser');
const app= express();
app.use(bodyParser);
var cookieParser = require('cookie-parser')
app.use(express.json());
const jwt = require('jsonwebtoken');
const router = express.Router();
// require('../app.js');
const User = require('../models/user.model');
const Driver = require('../models/userSchemaRide');
const Ride = require('../models/DetailsSchema')
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config({path:'../config.env'});
app.use(cookieParser());
const authenticate = require('../middleware/authenticate');
// const { findById } = require('../models/userSchema');
app.use(express.urlencoded({extended:true}));



// router.post('/register', async (req,res)=>{
//   console.log('-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=--==-=----------------- register');
//   const {username, email, password, cpassword} = req.body;
//      if(!username || !email || !password || !cpassword )
//      {
//        return res.status(422).json({error:"plz filled the field"});
//      }
//       try {
//          const userExist = await User.findOne({email:email});
//        if(userExist)
//        {
//          return res.status(422).json({error:"Email is Already is Registed"});
//        }
//        else if(password != cpassword)
//        {
//         return res.status(422).json({error: "password are not matching"});
//        }
//        else {
//         const user = new User({username, email, password, cpassword});
        

//       await user.save(); 
//           res.status(201).json({message: "user registed successfully"});
       
//         }

//        } catch(err) {
//          console.log(err);
//        }
//   //res.json({message: req.body}); 
// });

// //login 
// router.post('/login', async(req,res)=>{
//   console.log('-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=--==-=----------------- login');
//    try {
//      let token;
//      const {email, password} = req.body;
//      console.log(req.body);

//      if(!email || !password)
//      {
//        return res.status(422).json({error: "please filled the field"});
//      }
//      const userLogin = await User.findOne({email:email});
//      if(userLogin){
       
//      const isMatch = await bcrypt.compare(password,userLogin.password);
//      token = await userLogin.generateAuthToken();
//      console.log("the token part "+token);
     
//      res.cookie('jwt',token,{
//        expires:new Date(Date .now()+300000000),
//        httpOnly:true
//      });

//      if(!isMatch)
//      {
//       res.status(400).json({error:"Invalid Credientials "});
//      }else{
//       res.json({message:"User Login Successfully"});
//      }}
//      else{
//       res.status(400).json({error:"Invalid Credientials "});
//      }}
//    catch(err)
//    {
//      console.log(err);
//    }
// });

router.post('/register', async (req, res) => {
  const { username, email, password, cpassword } = req.body;
  if (!username || !email || !password || !cpassword) {
      return res.status(422).json({ error: "plz filled the field" });
  }
  try {
      const userExist = await User.findOne({ email: email });
      if (userExist) {
          return res.status(422).json({ error: "Email is Already is Registed" });
      }
      else if (password != cpassword) {
          return res.status(422).json({ error: "password are not matching" });
      }
      else {
          const user = new User({ username, email, password, cpassword });


          await user.save();
          res.status(201).json({ message: "user registed successfully" });

      }

  } catch (err) {
      console.log(err);
  }
});

// login 
router.post('/login', async (req, res) => {
  try {
      let token;
      const { email, password } = req.body;

      if (!email || !password) {
          return res.status(400).json({ error: "please filled the field" });
      }
      const userLogin = await User.findOne({ email: email });

      //    if(!userLogin){
      //        res.json({error : "user error"})
      //    } else{
      //        res.json({message: "done successfully"})
      //    }


      if (userLogin) {

          const isMatch = await bcrypt.compare(password, userLogin.password);
           token = await userLogin.generateAuthToken();
           console.log("the token part "+token);

           res.cookie('jwt',token,{
             expires:new Date(Date .now()+300000000),
             httpOnly:true
           });

          if (!isMatch) {
              res.status(400).json({ error: "Invalid Credientials " });
          } else {
              res.status(201).json({ message: "User Login Successfully" });
          }
      }
      else {
          res.status(422).json({ error: "Invalid Credientials " });
      }

  }
  catch (err) {
      console.log(err);
  }
});




router.post('/rideDetails',authenticate, async (req,res)=>{ 
  try{
    
  console.log('-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=--==-=----------------- rideDetails post');
  
    const {userName,departure,destination,date,time,number,registration,meetupPoint,charges}=req.body;
   
  if(!userName||!departure||!destination||!date||!time||!number||!registration||!meetupPoint||!charges)
  {
    return res.status(422).json({error:"plz filled the field"});
  }
  else{
    const loginData = await req['rootUser'].id;
    const loginUsername = await req['rootUser'].name;
    console.log(loginUsername);
    console.log("=========================");
    const userData = new Ride({loginId:loginData,loginName:loginUsername,detials:[{userName,departure,destination,date,time,number,registration,meetupPoint,charges}]});
    const allAds = new Driver({userName,departure,destination,date,time,number,registration,meetupPoint,charges});
    console.log("=====================12121====");
    //const data = await User.findOneAndUpdate(loginData,userData);
         //console.log(data);
         await userData.save();
         await allAds.save();
         res.status(201).json({message: "Added"});
  
      }
    }catch(e)
  {
    console.log('-=-=-=-=-=-=-=-=- Eror =-=-=--=-=-=-=-==--==-=-');
    console.log(e);
    res.send(e);
  }
});

router.get('/rideDetails',authenticate,async (req,res)=>{ 
  console.log('-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=--==-=----------------- rideDetails');
  try{
     const driverData = await Driver.find();
     res.send(driverData);
     //console.log(driverData);
     
  }catch(e)
  {
       res.send(e);
  }
});

router.get('/myRide',authenticate,async (req,res)=>{ 
  console.log('-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=--==-=----------------- myRide');
  try{
    const loginData = await req['rootUser'].id;
    const userData = await req['rootUser'].name;
    console.log(userData);
     const driverData = await Ride.find({loginId:loginData});
     console.log(driverData)
     res.send(driverData);
     
  }catch(e)
  {
       res.send(e);
  }
});

router.get('/home',authenticate,async(req,res)=> {
  try {
    console.log('-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=--==-=----------------- hello');
    // console.log(req)
    console.log(req['rootUser'].email)
    res.send({ rootUser: req['rootUser'] })
    // res.send('hello world');
  }catch(e)
  {
    console.log('-=-=-=-=-=-=-=-=- Eror =-=-=--=-=-=-=-==--==-=-');
    console.log(e);
    res.send(e);
  }
});

router.get('/logout',(req,res)=> {
  console.log('-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=--==-=----------------- logout');
  res.clearCookie("jwt");
  res.redirect("/login");
  res.status(200).send('User logout')
});




module.exports = router;
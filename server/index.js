  require("dotenv").config();
  const path = require('path');
  const express = require('express');
  const connect = require('./configs/db');
  const PORT = process.env.PORT || 5000;
  const userController = require('./controller/users.controller');
  const countryController = require('./controller/country.controller');
  const country = require('./model/country.model')
  // const User = require('./model/users.model');
  // const {register, login, registeradmin} = require('./controller/auth.controller');
  //  const productController = require('./controllers/products.controller');
  // const {body, validationResult} = require('express-validator');
  const app = express();
  
  app.use(express.json());
  // Have Node serve the files for our built React app
  app.use(express.static(path.resolve(__dirname, '../client/build')));
  
  // Handle GET requests to /api route
  // app.post("/country", async(req, res) => {
  //   try {
  //     const count = await country.find().lean().exec();
  //     res.send(count);
  //   } catch (error) {
      
  //   }
  // });
  
  
  // app.use('/register', userController);
  // app.use('/login', userController);
  app.use('/users', userController);
  app.use('/countries',countryController);
// app.use('/products', productController);

// app.post('/register', 
// body('full_name').isLength({min:5, max:15}).withMessage("name should be betweeen 3 to 15 characters"),
// body("email").isEmail().withMessage('eamil should a valid email address').bail()
// .custom(async(value)=>{
//     const user = await User.findOne({email:value});
//     if(user) throw new Error('email already exists')
//     return true;
// }),
// body('password').isStrongPassword()
// .withMessage('try strong password that have a combination of upercase alphabet, lowercase alphabet, special characters, number and must be greaer than 8 character'),
//  register);

//  app.post('/adminanoxco0', 
// body('full_name').isLength({min:5, max:15}).withMessage("name should be betweeen 3 to 15 characters"),
// body("email").isEmail().withMessage('eamil should a valid email address').bail()
// .custom(async(value)=>{
//       const user = await User.findOne({email:value});
//       if(user) throw new Error('email already exists')
//       return true;
//   }),
//   body('password').isStrongPassword()
//   .withMessage('try strong password that have a combination of upercase alphabet, lowercase alphabet, special characters, number and must be greaer than 8 character'),
//    registeradmin);
  
  // app.post('/login', login)
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, async()=>{
    try {
      await connect();
        console.log(`listening on ${PORT}....`)
    } catch (error) {
        console.log(error)
    }
})
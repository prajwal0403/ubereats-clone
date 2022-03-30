
// require("dotenv").config();
// const express = require('express')
// const path = require('path')
// const connect = require('./configs/db');
// const userController = require('./controller/users.controller');
// const User = require('./model/users.model');
// const {register, login, registeradmin} = require('./controller/auth.controller');
// // const productController = require('./controllers/products.controller');
// const {body, validationResult} = require('express-validator');

// const app = express();

// app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.json());


// app.use(express.urlencoded({extended: true }))

// app.use('/register', userController);
// app.use('/login', userController);
// app.use('/users', userController);
// // app.use('/products', productController);

// app.set('views', path.join(__dirname, 'views'))

// app.set('view engine', 'ejs')
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
//     const user = await User.findOne({email:value});
//     if(user) throw new Error('email already exists')
//     return true;
// }),
// body('password').isStrongPassword()
// .withMessage('try strong password that have a combination of upercase alphabet, lowercase alphabet, special characters, number and must be greaer than 8 character'),
//  registeradmin);

// app.post('/login', login)




// // app.get('/', (req, res) => res.render('pages/index'))

// const port = process.env.PORT || 5000

// app.listen(port, async()=>{
//     try{
//         await connect();
//         console.log(`listening on port ${port} ....`)
//     } catch(e){
//         console.log({message:e.message});
//     }
// })
// server/index.js
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
app.listen(PORT, async()=>{
    try {
        console.log(`listening on ${PORT}....`)
    } catch (error) {
        console.log(error)
    }
})
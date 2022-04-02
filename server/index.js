
const path = require('path');
const express = require('express');

const connect = require('./configs/db.js');
const app = express();
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
var cors = require('cors')
app.use(cors());
app.use(express.json());


const {register,login}=require("./controller/auth.controller")
app.use("/register",register);
app.use("/login", login);


const usercontrol=require('./controller/user.controller')
app.use("/user", usercontrol);

const mailcontrol=require('./controller/mailer')
app.use("/mailer", mailcontrol);
// Handle GET requests to /api route


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen('5000', async()=>{
    try {
      await connect();
        console.log('listening on port 5000....')
    } catch (error) {
        console.log(error)
    }
})
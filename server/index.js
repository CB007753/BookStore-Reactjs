//This will be the file where this server is going to be running through

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app =express();
const mysql = require("mysql");
const bcrypt = require('bcrypt');
const { response } = require('express');
const cookieParser = require("cookie-parser");
const session = require("express-session");

const db =mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "onlinebookstore",
});

//Defines the number of hashing rounds done during the bcrypt hashing
const saltRound = 10;

//Usage

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));//extended allows choosing between parsing the URL-encoded data with the qs library (when true)
app.use(cookieParser());

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


//Initilization of session
app.use (
    session ({
        key: "userId",//name of the cookie
        secret: "subscribe",//used to access data from the server-side
        resave: false,//enables the session to be stored back to the session store
        saveUninitialized: false,//allows any uninitialized session to be sent to the store
        cookie: {//sets the cookie expiry time
            expires: 60 * 60 * 24,
        },
    })
);


//Register function
//CRUD OPERATION- Insert Function
app.post("/api/insert", (req,res) => {

    const Fullname = req.body.Fullname
    const Email = req.body.Email
    const Password = req.body.Password
    const Phone = req.body.Phone
    const Role = "member"

    bcrypt.hash(Password,saltRound, (err,hash)=>{


        if(err){
            console.log(err)
        }
        
        const sqlInsert= "INSERT INTO member (Fullname, Email, Password, Phone) VALUES (?,?,?,?);";
    db.query(sqlInsert, [Fullname, Email, hash, Phone] , (err, result) => {
        console.log(err);
    });
    const sqlInsert2 = "INSERT INTO userrole (Email, Password, Role) VALUES (?,?,?);";
    db.query(sqlInsert2, [Email, hash, Role] , (err, result) => {
        console.log(err);
    });
       
        
        
//--
    })

    

});

//CRUD OPERATION- View All Function
//CRUD OPERATION- Delete Function
//CRUD OPERATION- Update Function



//Login- member
app.post("/api/login", (req,res) => {
    const Email = req.body.Email
    const Password = req.body.Password

    const sqlLogin ="SELECT * FROM userrole WHERE Email = ?;";

    db.query(sqlLogin, [Email] , (err, result) => {

         if(err){
                res.send({err: err});
            }

            if(result.length > 0){
                bcrypt.compare(Password, result[0].password, (error,response) =>{

                    if(response){
                        req.session.user = result;//holds/contains the result that we fetch
                        console.log(req.session.user);
                        res.send(result);
                    } else {
                        res.send({message: "Wrong email / password Combination !"}); 
                    }
                });
            } else{
                res.send({ message: "User doesn't exists"});
            }
            

    });

});

//Login-admin
app.post("/api/adminlogin", (req,res) => {
    const Email = req.body.Email
    const Password = req.body.Password

    const sqlLogin ="SELECT * FROM userrole WHERE Email = ? AND Password = ?;";

    db.query(sqlLogin, [Email,Password] , (err, result) => {

         if(err){
                res.send({err: err});
            }

            if(result.length > 0){
                res.send(result);

            } else {
                res.send({message: "Wrong Email or Password !"});
            }
            

    });


    // db.query(
    //     "SELECT * FROM userrole WHERE Email = ? AND Password = ?;",
    //     [Email,Password],
    //     (err, result) => {
    //         if(err){
    //             res.send({err: err});
    //         }

    //        else if(result.length > 0){
    //             res.send(result);

    //         } else {
    //             res.send({message: "Wrong Email/Password!"});
    //         }
    //     }

    // );

});

app.get("/api/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
  });

app.listen(3001, () => {
    console.log("Running on port 3001");
});

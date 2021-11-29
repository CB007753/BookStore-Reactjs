//This will be the file where this server is going to be running through

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app =express();
const mysql = require("mysql");

const db =mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "onlinebookstore",
});

//Initialization
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//Register function
//CRUD OPERATION- Insert Function
app.post("/api/insert", (req,res) => {

    const Fullname = req.body.Fullname
    const Email = req.body.Email
    const Password = req.body.Password
    const Phone = req.body.Phone
    const Role = "member"

    const sqlInsert= "INSERT INTO member (Fullname, Email, Password, Phone) VALUES (?,?,?,?);";
    db.query(sqlInsert, [Fullname, Email, Password, Phone] , (err, result) => {
        console.log(result);
    });
    const sqlInsert2 = "INSERT INTO userrole (Email, Password, Role) VALUES (?,?,?);";
    db.query(sqlInsert2, [Email, Password, Role] , (err, result) => {
        console.log(result);
    });
});

//CRUD OPERATION- View All Function
//CRUD OPERATION- Delete Function
//CRUD OPERATION- Update Function



//Login
app.post("/api/login", (req,res) => {
    const Email = req.body.Email
    const Password = req.body.Password

    const sqlLogin ="SELECT * FROM userrole WHERE Email = ? AND Password = ?;";

    db.query(sqlLogin, [Email, Password] , (err, result) => {

         if(err){
                res.send({err: err});
            }
            else if(result.length > 0){
                res.send(result);
            }
            else {
                res.send({message: "Wrong Email/Password!"});
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


app.listen(3001, () => {
    console.log("Running on port 3001");
});

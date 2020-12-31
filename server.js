const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const express = require('express');
const app = express();
const mysql = require('mysql')
const connection = mysql.createPool({
    host     : 'localhost', // Your connection adress (localhost).
    user     : 'root',     // Your database's username.
    password : '',        // Your database's password.
    database : 'music-app'   // Your database's name.
  });


  
  
  app.get('/songs', function (req, res) {
  
      connection.getConnection(function (err, connection) {
      connection.query('SELECT * FROM songs', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
      });
    });
  });
  
//   app.get('/categories', function (req, res) {
//     connection.getConnection(function (err, connection) {
//     connection.query('SELECT * FROM categories', function (error, results, fields) {
//       if (error) throw error;
//       res.send(results)
//     });
//   });
// });
  app.listen(3000, () => {
   console.log('Go to http://localhost:3000/songs so you can see the data.');
  });



// const conn = 'mongodb://127.0.0.1:27017'
// const databaseName = 'music-app';

// MongoClient.connect(conn, { useNewUrlParser: true }, (error, data) => {
//     if(error)
//         return console.log("Unable to connect to database");

//     const db = data.db(databaseName);

 

// });
// app.get('/songs', (req, res) =>{
//     db.collection('songs').insertOne({
//         Type:"hiphop",
//         artist:"Shakrira", 
//     },(err, res)=>{
//         if(err)
//             return console.log(err)
//         console.log(res.ops);

//     })
 
// })

// app.listen(3000, ()=>{
//     console.log("Listeneing....")
// })
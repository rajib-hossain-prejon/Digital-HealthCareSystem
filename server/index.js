const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const MongoClient = require('mongodb').MongoClient;
const fs = require('fs-extra');
const fileUpload = require('express-fileupload');
const res = require('express/lib/response');

require('dotenv').config()


const password = '1234';

const uri = "mongodb+srv://rajib:1234@cluster0.o9msh.mongodb.net/ohs?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express()


app.use(bodyParser.json());
app.use(cors());
app.use(express.static('doctors'));
app.use(fileUpload());

const port = 5000;

app.get('/',(req,res) => {
  res.send("hello");  
})




client.connect(err => {
  const appointmentCollection = client.db("ohs").collection("appointments");
  const doctorsCollection = client.db("ohs").collection("doctors");
 console.log('DB COnnected');

  app.post('/addAppointment',(req, res) => {
    const appointment = req.body;
    
    appointmentCollection.insertOne(appointment)
    .then(result => {
      res.send(result.insertedCount > 0)
    })
  })

  
  app.post('/appointmentsByDate',(req, res) => {
    const date = req.body;
    
    appointmentCollection.find({date: date.date})
    .toArray((err, documents) => {
      res.send(documents);
    })
  })

  app.post('/findDoctors',(req, res) => {
    const speciality = req.body;
    console.log(speciality.speciality.speciality);
    doctorsCollection.find({speciality: speciality.speciality.speciality})
    .toArray((err, documents) => {
      res.send(documents);
    })
  })
 

  
  app.post('/addADoctor',(req, res) => {
    const file = req.files.file;
    const name = req.body.name;
    const email = req.body.email;
    const speciality = req.body.speciality;
    const location = req.body.location;
    const visitingHour= req.body.visitingHour;
    const phone = req.body.phone;


    const filePath = `${__dirname}/doctors/${file.name}`;
 
  file.mv(`${__dirname}/doctors/${file.name}`, err => {
    if(err){
      console.log(err);
      return res.status(500).send({msg: 'Failed to upload image' });
    }
    const newImg = fs.readFileSync(filePath);
    const encImg = newImg.toString('base64');

    var image = {
      contentType: req.files.file.mimetype,
      size: req.files.file.size,
      img: Buffer(encImg, 'base64')
    }

    doctorsCollection.insertOne({name, phone, email, speciality, location, visitingHour, image})
    .then(result =>{
      fs.remove(filePath, error => {
        if(error){
          console.log(error); 
        }
        res.send(result.insertedCount > 0)
      })
     
    })
    //return res.send({name: file.name, path: `/${file.name}`})
  })
  })




});
 


app.listen(process.env.PORT|| port)
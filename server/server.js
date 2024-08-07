const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const host=process.env.HOST || 'localhost'

//nodemailer

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service:'gmail',
  port: 465,
  secure:true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
    }
    });
// const transporter = nodemailer.createTransport({
//   service:'gmail',
//   port: 465,
//   secure:true,
//   auth: {
//     user: 'shekharkaushik601@gmail.com',
//     pass:'nyxg loxl zvuw uohr'
//     }
//     });
   

// Middleware
const corsOptions = {
  origin: ['https://portfolio-shekhar-sharmas-projects-52c851c1.vercel.app'],
  methods: ['GET,POST'],   
  credentials: true,
};

app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.connect('mongodb+srv://Shekhar:Shekhar7206@cluster0.z1lxhch.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0', {
 
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


//schema and model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model('contacts', contactSchema);

// Handle form submission
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const mailOptions = {
      from: process.env.EMAIL ,
      to:  process.env.EMAIL,
      subject: 'protfolio contact request',
      text: `someone want to contact with email:${email} \n message:${message} `
      };
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    console.log(newContact);
    transporter.sendMail(mailOptions,function(err,info){
      if(err){
        console.log(err);
        }else{
          console.log(info);
        }
    });
    res.status(201).json({ message: 'Message received' });
    
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Error saving message' });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Something went wrong' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
}).on('error', (err) => {
  if (err.code === 'EACCES') {
    console.error(`Port ${port} requires elevated privileges`);
  } else if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use`);
  } else {
    console.error('Error starting server:', err);
  }
});

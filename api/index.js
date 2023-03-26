const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const User = require('./models/user');

dotenv.config();
const app = express();

mongoose.set('strictQuery', false);

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8091;
const CONNECTION = process.env.CONNECTION;

app.get("/", (req, res) =>  {
  res.send("Hello World!");
});

app.get('/api/v1/users', async (req, res) => {
  const result = await User.find();
  res.send({"users": result});
});

app.post('/api/v1/users', (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save();
  res.status(201).json({user});
});

const user = new User({
  name : 'Adel',
  age : '24'
});

user.save();

const start = async () => {
  try {
    await mongoose.connect(CONNECTION);

    app.listen(PORT , () => {
      console.log(`API listening on port ${PORT}!`);
  }); 
  } catch(e) {
    console.log(e.message);
  }
};

start();

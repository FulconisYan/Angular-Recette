const express = require("express");
const mongoose = require("mongoose");
const yaml = require('yamljs');
const dotenv = require('dotenv');
const User = require('./models/user');

// Swagger imports and conf file 
const swaggerUI = require('swagger-ui-express');

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

swaggerDoc = yaml.load('./swagger.yaml');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

mongoose.set('strictQuery', false);

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const PORT = process.env.PORT || 8091;
const CONNECTION = process.env.CONNECTION;

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

app.get("/", (req, res) =>  {
  res.send("Hello World!");
});

app.get('/api/v1/users', async (req, res) => {
  const result = await User.find();
  res.send({"users": result});
});

app.get('/api/v1/recipes', async (req, res) => {
  res.send({id: 24});
})

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

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const User = require('./models/user');

dotenv.config();
const app = express();

/*
When strict option is set to true , Mongoose will ensure that only the fields that are specified in your Schema will be saved in the database, 
and all other fields will not be saved (if some other fields are sent). 
In simple term, the strict option, ensures that values passed to our model constructor 
that were not specified in our schema do not get saved to the db.
*/

mongoose.set('strictQuery', false);

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8091;
const CONNECTION = process.env.CONNECTION;

/************** GET ************************/

app.get('/', (req, res) =>  {
  res.send("Hello World!");
});

/* Request a database element using id of the element
 This function do a convert from the id passed in parameters to an ObjectId to find the element.*/
app.get('/api/v1/users/:_id', async (req, res) => {
   let ObjectId = mongoose.Types.ObjectId;
   let query = new ObjectId(req.params._id);
   const result = await User.find(query);
   res.send({"user" : result});
});

// Find all users
app.get('/api/v1/users', async (req, res) => {
  const result = await User.find();
  res.send(result);
});

/********************************************/

/************** POST ************************/

// Create a new user
app.post('/api/v1/users', (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save();
  res.status(201).json({user});
});

// Define a new ingredient
app.post('/api/v1/ingredients', (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save();
  res.status(201).json({user});
});

/********************************************/

/************** PUT *************************/

app.put('/api/v1/users', (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save();
  res.status(201).json({user});
});

/********************************************/

/************** DELETE ************************/

app.delete('/api/v1/users', (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save();
  res.status(201).json({user});
});

/**********************************************/
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

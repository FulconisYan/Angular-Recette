const express = require("express");
const mongoose = require("mongoose");
const yaml = require("yamljs");
const dotenv = require("dotenv");
const pbkdf2 = require("pbkdf2");
const crypto = require("crypto");

// Models
const userModel = require("./models/user.js");
const toolModel = require("./models/tool.js");
const ingredientModel = require("./models/ingredient.js");
const recipeModel = require("./models/recipe.js");

// JS
const dbuser = require("./database_access/dbuser.js");

// Swagger imports and conf file
const swaggerUI = require("swagger-ui-express");

dotenv.config();
const app = express();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

swaggerDoc = yaml.load("./swagger.yaml");

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

/*
When strict option is set to true , Mongoose will ensure that only the fields that are specified in your Schema will be saved in the database, 
and all other fields will not be saved (if some other fields are sent). 
In simple term, the strict option, ensures that values passed to our model constructor 
that were not specified in our schema do not get saved to the db.
*/

mongoose.set("strictQuery", false);

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

const PORT = process.env.PORT || 8091;
const CONNECTION = process.env.CONNECTION;

if (CONNECTION === "undefined") {
    console.log("Please verify .env file");
    process.exit(1);
}

const start = async () => {
    try {
        await mongoose.connect(CONNECTION);

        app.listen(PORT, () => {
            console.log(`API listening on http://localhost:${PORT}!`);
        });
    } catch (e) {
        console.log(e.message);
    }
};

start();

/************** GET ************************/

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/v1/auth-test", async (req, res) => {
    let ip = req.socket.remoteAddress;
    let test = await dbuser.authentificate("test", "abc", ip);
    res.send("Authentification test : " + test);
});

app.get("/v1/insert-test", async (req, res) => {
    let test = await dbuser.insertNewUser(
        "User1",
        "abc",
        "https://picsum.photos/200/300",
        "Bla bla bla",
        "mail@mail.fr"
    );
});

/* Request a database element using id of the element
 This function do a convert from the id passed in parameters to an ObjectId to find the element.*/
app.get("/api/v1/users/:_id", async (req, res) => {
    let ObjectId = mongoose.Types.ObjectId;
    let query = new ObjectId(req.params._id);
    const result = await User.find(query);
    res.send({
        user: result,
    });
});

// Find all users
app.get("/api/v1/users", async (req, res) => {
    const result = await User.find();
    res.send(result);
});

/********************************************/

/************** POST ************************/

// Create a new user
app.post("/api/v1/users", (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    user.save();
    res.status(201).json({
        user,
    });
});

// Define a new ingredient
app.post("/api/v1/ingredients", (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    user.save();
    res.status(201).json({
        user,
    });
});

/********************************************/

/************** PUT *************************/

app.put("/api/v1/users", (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    user.save();
    res.status(201).json({
        user,
    });
});

/********************************************/

/************** DELETE ************************/

app.delete("/api/v1/users", (req, res) => {
    console.log(req.body);
    const user = new userModel(req.body);
    user.save();
    res.status(201).json({
        user,
    });
});

/**********************************************/

app.get("/api/v1/users", async (req, res) => {
    const result = await User.find();
    res.send({
        users: result,
    });
});

app.get("/api/v1/recipes", async (req, res) => {
    res.send({
        id: 24,
    });
});

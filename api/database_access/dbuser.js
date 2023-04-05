// Models
const userModel = require("../models/user.js");
const toolModel = require("../models/tool.js");
const ingredientModel = require("../models/ingredient.js");
const recipeModel = require("../models/recipe.js");

const utils = require("../utils/utils.js");

const pbkdf2 = require("pbkdf2");
const crypto = require("crypto");

// Tests the hashed password of a user
async function authentificate(login, password, ip) {
    const user = await userModel.findOne({
        name: login,
    });
    const dbHashedPassword = user["password"];
    const dbSalt = user["_salt"];

    let newHashedPassword = pbkdf2.pbkdf2Sync(
        password,
        dbSalt,
        100000,
        64,
        "sha512",
        (err, derivedKey) => {
            if (err) throw err;
            console.log(err, derivedKey.toString("hex"));
        }
    );

    const auth = newHashedPassword == dbHashedPassword ? true : false;

    const log = `{"login": "${login}","ip":"${ip}","time":"${new Date(Date.now())}","success":"${auth}"}`.toString();

    console.log(log)
    console.log(utils.writeToFile(log, "./logs/auths.logs.json"));

    if (auth)
        console.log(`${login}@${ip} authentified (${new Date(Date.now())})`);

    return auth;
}

function insertNewUser(username, password, profilePictureUrl, resume, mail) {
    let objectId = new mongoose.Types.ObjectId();
    let user = new userModel();

    // Added to password to better protection
    let salt = crypto.randomBytes(10).toString("hex");

    // Generate hashed password using pbkdf2
    let hashedPassword = pbkdf2.pbkdf2Sync(
        password,
        salt,
        100000,
        64,
        "sha512",
        (err, derivedKey) => {
            if (err) throw err;
            console.log(err, derivedKey.toString("hex"));
        }
    );

    user._id = objectId;
    user.__v = 0;
    user._salt = salt;
    user.name = username;
    user.password = hashedPassword;
    user.profilePicture = profilePictureUrl;
    user.mail = mail;
    user.resume = resume;
    user.nbCommentsPublished = 0;
    user.nbRecipesPublished = 0;
    user.avgRate = 0;

    user.save((e, r) => {
        if (e) {
            console.log("Error during the insert of a new user ! \n" + e);
        } else {
            console.log("Added new user !\n" + r);
        }
    });
}

module.exports = { authentificate, insertNewUser };

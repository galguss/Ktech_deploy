//const bcrypt = require('bcrypt');
//const util = require('util');
const md5 = require('md5');
const jwt = require('jsonwebtoken');


const userLogin = require('../modules/users');

//const bcryptPromise = util.promisify(bcrypt.compare);

let token = "";
let userEmail;
let userId;
let image;
let levelUser;

exports.userLogin = async (email, password) => {
        let [user , _] = await userLogin.login(email);
        if(user.length === 0){
            return  {message: "User does not exist in the system"};
        };
        userEmail = user[0].email;
        userId = user[0].user_id;
        image = user[0].image;
        levelUser = user[0].level;
        const userIsLogin =( md5('GK'+ password) === user[0].password);
        if(userIsLogin){
              token = jwt.sign({
                id: user[0].user_id,
                email: user[0].email
            }, process.env.JWT_KEY);

            return { 
                message: "Auth successful",
                user_id: user[0].user_id,
                email: user[0].email,
                token: token,
                level: user[0].level,
                image: user[0].image,
                favorite: user[0].favorite_languages,
                hobbies: user[0].hobbies
            };
        };

        return {message: "Email or Password is incorrect"};
        
};

exports.getUserEmail = () => {
    return userEmail;
};

exports.GetToken = () => {
    return token;
};

exports.GetUserId = () => {
    return userId;
};

exports.getLevelUser = () => {
    return levelUser;
}



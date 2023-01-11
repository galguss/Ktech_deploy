const bcrypt = require('bcrypt');
const util = require('util');
const jwt = require('jsonwebtoken');


const userLogin = require('../modules/users');

const bcryptPromise = util.promisify(bcrypt.compare);

let token = "";
let userEmail;
let userId;
let levelUser;

exports.userLogin = async (email, password) => {
        let [user , _] = await userLogin.login(email);
        if(user.length === 0){
            return  {message: "User does not exist in the system"};
        };
        userEmail = user[0].email;
        userId = user[0].user_id;
        levelUser = user[0].level;
        const userIsLogin = await bcryptPromise(password, user[0].password);
        if(userIsLogin){
              token = jwt.sign({
                id: userId,
                email: userEmail
            }, process.env.JWT_KEY);

            return { 
                message: "Auth successful",
                token: token
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



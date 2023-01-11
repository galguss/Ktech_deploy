const jwt = require('jsonwebtoken');

const userLogin = require('../modules/login');


const checkAuth = async (req, res, next) => {
    try {
        if((userLogin.GetToken() !== "") && ((userLogin.getLevelUser() === "a") || (userLogin.getLevelUser() === "A"))){
            jwt.verify(userLogin.GetToken(), process.env.JWT_KEY);
            next();
        }else{
            throw new Error();
        }  
    } catch (error) {
        res.status(401).json({
            message: "Auth failed"
        });
    }  
};

module.exports = checkAuth;
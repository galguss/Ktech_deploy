//const util = require('util');
//const bcrypt = require('bcrypt');

const md5 = require('md5');
const express = require('express');
const router = express.Router();

const User = require('../modules/users');
const checkAdmin = require('../middlewares/checkAdmin');
const checkAuth = require('../middlewares/checkAuth');
const upload = require('../middlewares/upload');

//const bcryptHash = util.promisify(bcrypt.hash);


router.get('/', async (req, res) => {
    try {
        let [users, _] = await User.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.getUserdata(req.params.id);
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json({
            message: error
        })
    }
});


router.post('/', checkAdmin, async (req,res) => {
    try {
        const { email, password, github, fullName, level } = req.body;

        const newPassword = md5("GK" + password);
        await User.createUser(email, newPassword, github, fullName, level);
        res.status(201).json({ message: "User Created"});
    } catch (error) {
        res.status(401).json({message: "User failed"});
    }
});

router.patch('/', checkAuth, upload.single('image'), async (req, res) => {
    try {
        const {favorite, hobbies, column, oldValue, newValue, user_id, levelU, IsThereAFile } = req.body;
        
        if(levelU !== "a" || levelU !== "A"){
            if(IsThereAFile === 'true'){
                const {filename: image} = req.file;

                let pathImage = `/uploads/${image}`;
                await User.saveImage(pathImage, user_id);  
            }

            if(typeof favorite !== 'undefined'){
                await User.updateFavLangUser(user_id, favorite);
            }

            if(typeof hobbies !== 'undefined'){
                await User.updateHobbiesUser(user_id, hobbies);
            }

            if(typeof newValue !== 'undefined'){
                const newPassword = md5('GK' + newValue);
                await User.updatePasUser(user_id, newPassword);
            }

            res.status(200).json({
                message: "password updeted",
            });
        }else{
            if(column === "password"){
                const newPassword = md5('GK' + newValue);
                await User.updateUser(column, oldValue, newPassword);
            }
            await User.updateUser(column, oldValue, newValue);
            res.status(200).json({ message: 'user updated'});
        }
        
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'updated failed'});
    }
});


router.delete('/', checkAdmin, async ( req, res ) => {
    try {
        const { userEmail } = req.body;
         await User.deleteUser(userEmail);
        res.status(201).json({
            message: "user deleted"
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "deleted failed"
        });
    }
});



module.exports = router;
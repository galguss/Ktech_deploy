const util = require('util');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const User = require('../modules/users');
const checkAdmin = require('../middlewares/checkAdmin');
const checkAuth = require('../middlewares/checkAuth');
const upload = require('../middlewares/upload');

const bcryptHash = util.promisify(bcrypt.hash);


router.get('/', checkAuth,async (req, res) => {
    try {
        let [users, _] = await User.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
});


router.post('/', checkAdmin, async (req,res) => {
    try {
        const { email, password, github, fullName, level } = req.body;

        const newPassword = await bcryptHash(password, 10);
        await User.createUser(email, newPassword, github, fullName, level);
        res.status(201).json({ message: "User Created"});
    } catch (error) {
        res.status(401).json({message: "User failed"});
    }
});

router.patch('/', checkAuth, upload.single('image'), async (req, res) => {
    try {
        const { column, oldValue, newValue, user_id, levelU } = req.body;
        if(levelU !== "a" || levelU !== "A"){
            const {filename: image} = req.file;
            let pathImage = "";
            if(typeof image !== 'undefined'){
                pathImage = `/uploads/${image}`;
                await User.saveImage(pathImage, user_id);
            }

            if(typeof newValue !== 'undefined'){
                const newPassword = await bcryptHash(newValue, 10);
                await User.updatePasUser(user_id, newPassword);
            }

            res.status(200).json({
                message: "password updeted",
            });
        }else{
            if(column === "password"){
                const newPassword = await bcryptHash(newValue, 10);
                await User.updateUser(column, oldValue, newPassword);
            }
            await User.updateUser(column, oldValue, newValue);
            res.status(201).json({ message: 'user updated'});
        }
        
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'updated failed'});
    }
});


router.delete('/', checkAdmin, async ( req, res ) => {
    try {
        const { userEmail } = req.body;
        const userEmails = await User.getUserName();
        
        for(let k = 0; k < userEmails.length; k++)
            if(userEmail === userEmails[k])
                await User.deleteUser(k);

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
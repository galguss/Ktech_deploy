const express = require('express');
const router = express.Router();

const Encryption = require('../modules/Encryption_M');
const User = require('../modules/users');
const checkAdmin = require('../middlewares/checkAdmin');
const checkAuth = require('../middlewares/checkAuth');
const upload = require('../middlewares/upload');

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
        const newPassword = new Encryption(password);
        await User.createUser(email, newPassword.getEncryption(), github, fullName, level);
        res.status(201).json({ message: "User Created"});
    } catch (error) {
        res.status(401).json({message: "User failed"});
    }
});

router.patch('/', checkAuth, upload.single('image'), async (req, res) => {
    try {
        const {favorite, hobbies, column, newValue,github ,password, user_id, IsThereAFile } = req.body;
        const newPassword = (column === 'password')? new Encryption(newValue) : typeof password !=='undefined'? new Encryption(password) : null;
        let pathImage;
        if(IsThereAFile === 'true'){
            const {filename: image} = req.file;
             pathImage = `/uploads/${image}`;  
        }
        await User.updateUser(user_id, column ,newValue, newPassword !== null && newPassword.getEncryption(), pathImage, favorite, hobbies, github);
        res.status(200).json({ message: 'user updated'});

    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'updated failed'});
    }
});


router.delete('/', checkAdmin, async ( req, res ) => {
    try {
        const { id } = req.body;
         await User.deleteUser(id);
        res.status(200).json({
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
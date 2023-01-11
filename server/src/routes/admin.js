const util = require('util');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const User = require('../modules/users');

const bcryptHash = util.promisify(bcrypt.hash);


router.get('/', async (req, res) => {
    try {
        let [users, _] = await User.getAllUsers();
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
    }
});


router.post('/', async (req,res) => {
    try {
        console.log("hii");
        const { email, password, github, fullName, level } = req.body;

        const newPassword = await bcryptHash(password, 10);
        await User.createUser(email, newPassword, github, fullName, level);
        res.status(201).json({ message: "User Created"});
    } catch (error) {
        res.status(401).json({message: "User failed"});
    }
});

router.patch('/', async (req, res) => {
    try {
        const { column, oldValue, newValue } = req.body;
        if(column === "password"){
            const newPassword = await bcryptHash(newValue, 10);
            await User.updateUser(column, oldValue, newPassword);
        }
        await User.updateUser(column, oldValue, newValue);
        res.status(201).json({ message: 'user updated'});
    } catch (error) {
        res.status(401).json({ message: 'updated failed'});
    }
});

router.delete('/', async ( req, res ) => {
    try {
        const { userId } = req.body;
        await User.deleteUser(userId);

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
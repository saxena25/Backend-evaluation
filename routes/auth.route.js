const express = require("express");
const User = require("../models/user.model");
const router = express.Router();
const jwt = require("jsonwebtoken");

//? Register User
router.post("/api/register", async(req, res)=>{
    try {
        const user = new User(req.body);
        await user.save()
        res.status(201).json(user).select("-password");
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
})

//? Login user
router.post("/api/login", async (req, res)=>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username, password});

        if(!user){
            return res.status(404).json({message: "User Not Found"});
        }

        const token = jwt.sign({name: "library"}, process.env.SECRET_KEY);
        res.status(200).json({message: "Login Successfully", token});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
});


module.exports = router;
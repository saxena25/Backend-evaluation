const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/user.model");


//? For Admin get all users
router.get("/", auth, async (req, res)=>{
    try {
        const users = await User.find().populate("borrowedBooks");
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


//? update user
router.patch("/api/:id", async (req, res)=>{
    try {
        const {name, email, password} = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, {name, email, password},{new:true});
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//? Delete user
router.delete("/api/:id", async(req, res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "User Deleted Successfully"});
    } catch (error) {
        res.status(500).json({message: "Error Deleting User"})
    }
})

//? get user by id
router.get("/api/:id", async(req, res)=>{
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}) 

module.exports = router;
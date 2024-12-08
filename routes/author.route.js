const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Author = require("../models/author.model");

//? create a Author
router.post("/api/authors", async (req, res)=>{
    try {
        const author = new Author(req.body);
        await author.save();
        res.status(201).json(author);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//? get all authors
router.get("/api/authors", async (req, res)=>{
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//? update author
router.patch("/api/authors/:id", async (req, res)=>{
    try {
        const {name, biography, dateOfBirth, nationality} = req.body;
        const author = await Author.findByIdAndUpdate(req.params.id, {name, biography, dateOfBirth, nationality},{new:true});
        res.json(author);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//? delete author
router.delete("/api/authors/:id", async(req, res)=>{
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Author Deleted Successfully"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//? get author by id
router.get("/api/authors/:id", async (req, res)=>{
    try {
        const author = await Author.findById(req.params.id);
        res.json(author);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;
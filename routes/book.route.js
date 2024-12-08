const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Book = require("../models/book.model");

router.get("/", auth, async (req, res)=>{
    try {
        const books = await Book.find().populate("author");
        res.json(books);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


//? update user
router.patch("/api/:id", async (req, res)=>{
    try {
        const {title, summary, publicationDate, genres, copiesAvailable} = req.body;
        const book = await Book.findByIdAndUpdate(req.params.id, {title, summary, publicationDate, genres, copiesAvailable},{new:true});
        res.status(200).json({message: "Book Updated Successfully"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//? Delete user
router.delete("/api/:id", async(req, res)=>{
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "book Deleted Successfully"});
    } catch (error) {
        res.status(500).json({message: "Error Deleting User"})
    }
})

//? get user by id
router.get("/api/:id", async(req, res)=>{
    try {
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}) 

module.exports = router;
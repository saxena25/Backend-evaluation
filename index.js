require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const authorRouter = require("./routes/author.route");
const bookRouter = require("./routes/book.route");
const app = express();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/author", authorRouter);
app.use("/book", bookRouter);

app.listen(process.env.PORT, async ()=>{
    await connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
})
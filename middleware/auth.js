const jwt = require("jsonwebtoken");

const auth = (req, res, next)=>{
    const token = req.query.token;

    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
        if(error){
            res.status(401).send("Invalid Token, Please Login Again");
        }else{
            next();
        }
    })
}

module.exports = auth; 
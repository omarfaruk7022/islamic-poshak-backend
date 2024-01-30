const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
require("dotenv").config();
const colors = require("colors");


const app = require("./app");

// database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log("Database connection successful".cyan.bold);
});

// function verifyJWT(req, res, next) {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) {
//     return res.status(401).send({ message: "UnAuthorized access" });
//   }
//   const token = authHeader.split(" ")[1];
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
//     if (err) {
//       return res.status(403).send({ message: "Forbidden access" });
//     }
//     req.decoded = decoded;
//     next();
//   });
// }
// server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
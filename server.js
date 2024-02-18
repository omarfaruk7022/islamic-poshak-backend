const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// database connection
// mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
//   console.log("Database connection successful".cyan.bold);
// });
const uri = process.env.DATABASE_LOCAL;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

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
const port = 5000 || process.env.PORT;
app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});

const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello BMW!");
});

const productRoute = require("./routes/product.route");
const usersRoute = require("./routes/users.route");

app.use("/api/product", productRoute);
app.use("/api/users", usersRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


module.exports = app;
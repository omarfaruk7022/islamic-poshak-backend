const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const productRoute = require("./routes/product.route");
const usersRoute = require("./routes/users.route");
const cartRoute = require("./routes/cart.route");
const orderRoute = require("./routes/order.route");
const testRoute = require("./routes/test.router");
const { default: mongoose } = require("mongoose");

app.use("/api/product", productRoute);
app.use("/api/users", usersRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/test", testRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;

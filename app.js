import express from "express";
import { json } from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

import productRoute from "./src/routes/product.route.js";
import usersRoute from "./src/routes/users.route.js";
import cartRoute from "./src/routes/cart.route.js";
import orderRoute from "./src/routes/order.route.js";
import testRoute from "./src/routes/test.router.js";

app.use("/api/product", productRoute);
app.use("/api/users", usersRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/test", testRoute);

export default app;

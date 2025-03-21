const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const authRouter = require("./routes/user");

app.use("/auth", authRouter);

app.listen(process.env.PORT);

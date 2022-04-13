const express = require("express");
const mongoose = require("mongoose");

const app = express();

const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter);
app.use("/", homeRouter);

app.use((req, res, next) => {
    res.status(404).send("Not Found");
});

mongoose.connect(
    "mongodb://127.0.0.1:27017/usersdb",
    { useUnifiedTopology: true },
    (err) => {
        if (err) return console.log(err);
        app.listen(3000, () => {
            console.log("Сервер ожидает подключения...");
        });
    }
);

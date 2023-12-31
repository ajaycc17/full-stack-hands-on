const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const sequelize = require("./database");
const adminRoutes = require("./routes/admin");

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use(adminRoutes);

sequelize
    .sync()
    .then((res) => {
        app.listen(3000);
    })
    .catch((err) => console.log(err));

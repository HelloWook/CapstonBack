require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const commentRoutes = require("./routes/commentRoute");
const userRoutes = require("./routes/userRoute");
const flowerRoutes = require("./routes/flowerRoute");
const postRoutes = require("./routes/postRoute");
const arduinoRoutes = require("./routes/ardunioRoute");
const { swaggerUi, specs } = require("./modules/swagger");
const { com } = require("./config/arduino");
const updateFlowerData = require("./util/fllowerDateUpadate");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// 아두이노 동작
com.on("open", function () {
  console.log("open serial communication");
});

updateFlowerData();
app.use("/comment", commentRoutes);
app.use("/flower", flowerRoutes);
app.use("/", userRoutes, postRoutes);
app.use("/motor", arduinoRoutes);
//app.use("/payload", payloadRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

const express = require("express");
const cors = require("cors");
const passport = require("./config/passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const logger = require("morgan");
const connectDB = require('./config/database')
const iouRoutes = require('./routes/iouRoutes')
const authRoutes = require('./routes/authRoutes')

require("dotenv").config();

connectDB()

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_PASSWORD,
      collectionName: "sessions",
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(logger("dev"));

app.use('/api/ious', iouRoutes)
app.use('/api/users', authRoutes)

app.listen(5003, () => {
  console.log("Server is runing on port 5003");
});

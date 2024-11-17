const express = require("express");
const cors = require("cors");
const passport = require("./config/passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const logger = require("morgan");
const connectDB = require('./config/database')
const iouRoutes = require('./routes/iouRoutes')
const authRoutes = require('./routes/authRoutes')
const path = require('path');
const PORT = process.env.PORT || 3000

require("dotenv").config({path: './config/.env'});

connectDB()

const app = express();

app.use(
  cors({
    origin: "https://clipboardiou.netlify.app",
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

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is runing on ${PORT}`);
});

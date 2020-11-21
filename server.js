require('dotenv').config()
const express = require("express");
const session = require('express-session');
const dbConnection = require('./database') ;
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require("./routes/route");
const routes = require("./routes")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
	session({
		secret: 'fantasticforagers',
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({ mongooseConnection: dbConnection })
	})
)

app.use(passport.initialize());
app.use(passport.session());

app.use('/user', authRoutes);
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
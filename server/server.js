const express = require('express');
const session = require("express-session");
const routes = require("./routes");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const router = express.Router();
const path = require("path");


// Import the connection object
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


//session
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use(router);
// app.use("/", routes);

// Connect to the database before starting the Express.js server
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
  sequelize.sync({ force: false });
});


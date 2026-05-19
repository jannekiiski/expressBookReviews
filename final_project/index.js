const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;
const app = express();

app.use(express.json());

app.use(session({
  secret: "fingerprint_customer",
  resave: true,
  saveUninitialized: true
}));

app.use("/customer", customer_routes);
app.use("/", genl_routes);

// Mount customer routes
app.use("/customer", customer_routes);

// Mount general routes
app.use("/", genl_routes);

const PORT = 5000;

app.listen(PORT, () => console.log("Server is running"));
const express = require('express');
const router = express.Router();
const { expressjwt: jwt } = require("express-jwt");  // Using jwt as authentication middleware
const auth = jwt({
    secret: process.env.JWT_SECRET,
    requestProperty: 'payload',
    algorithms: ["HS256"],
});

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

// authentication
router
    .route('/register')
    .post(authController.register);
router
    .route('/login')
    .post(authController.login);

// trips
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);  // Injecting jwt authentication middleware to route for tripsAddTrip

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(auth, tripsController.tripsUpdateTrip)  // Injecting jwt authentication middleware to route for tripsUpdateTrip
    .delete(auth, tripsController.tripsDeleteTrip);  // Injecting jwt authentication middleware to route for tripsDeleteTrip

module.exports = router;
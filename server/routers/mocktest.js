const router = require('express').Router();
const mocktestdata =  require("../controller/mocktestdata");
const mocktests = require("../controller/mocktests");
const isAuthenticated = require("../middleware/auth");
const addMockToUser = require("../controller/AttemptingMocks");
const addAttemptedMockToUser = require("../controller/AttemptedMocks");
const attempted = require('../controller/attempted');
const AddMockTest = require('../controller/AddMockTest');


router.post("/mocktests", mocktests);
router.post("/mocktestdata", mocktestdata);
router.post("/addMocktoUser", addMockToUser);
router.post("/addAttemptedMocktoUser", addAttemptedMockToUser);
router.post("/attemptedmocks", attempted);
router.post("/addmocktest",AddMockTest);

module.exports = router;
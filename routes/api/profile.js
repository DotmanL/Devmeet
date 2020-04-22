const express = require('express');
const router = express.Router();

//@orute     GET api/Profile
// @desc     Test route
// @access   Public
router.get('/', (req, res) => res.send('Profile Route'));

module.exports = router;

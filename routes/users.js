const express = require('express');

const router = express.Router();

// @route    Get api/users
// @desc     Register a user
//@access    Public
router.get('/', (req, res) =>{
    res.json({ msg: "Register a user"});
});

module.exports = router;
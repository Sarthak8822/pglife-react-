const express = require('express');
const router = express.Router();

// @route    Get api/users
// @desc     Register a user
// @access   private
router.get('/', (req,res) =>{
    res.json({msg: "get a loginned user"});
});

// @route    POST api/users
// @desc     Auth user & get
// @access   Public
router.post('/', (req,res) =>{
    res.json({msg: "log in a user"});
});

module.exports = router;
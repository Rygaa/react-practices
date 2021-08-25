const express = require('express')
const router = new express.Router();
const Account = require('../models/account')
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')
router.post('/checkIdToken', auth, async (req, res) => {
    const account = req.body.account;
    const idToken = req.body.idToken;
    if (account){
        res.send({
            message: 'Your are login',
            idToken,
            username: account.username
        })
        return;
    }
    res.send({
        error: 'Wrong id or password'

    })


})


module.exports = router
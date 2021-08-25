const express = require('express')
const router = new express.Router();
const Account = require('../models/account')
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password
    const account = await Account.findOne({ username })
    if (account === null) {
        res.send({
            error: 'account not found'

        })
        return;
    }
    const doesPasswordMatches = (account.password === password)
    if (doesPasswordMatches) {
        const idToken = await jwt.sign({ _id: account._id }, 'Chat-App-shfijksdsdnfuir')
        account.idTokens = account.idTokens.concat(idToken);
        await account.save();
        res.send({
            message: 'Your are login',
            idToken,
        })
        return;
    }
    res.send({
        error: 'Wrong id or password'

    })


})


module.exports = router
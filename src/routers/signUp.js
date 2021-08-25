const express = require('express')
const router = new express.Router();
const Account = require('../models/account')
router.post('/signUp', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password
    const doesAccountAlreadyExist = await getAccountByUsername(username);
    if (doesAccountAlreadyExist) {
        res.send({
            error: 'account already exist',
        })
        return;
    }
    const newAccount = new Account({username, password})
    await newAccount.save();
    res.send({
        message: 'Account created'
    })
    
})  

const getAccountByUsername = async username => {
    const account = await Account.findOne({username})
    return account;
}

module.exports  = router
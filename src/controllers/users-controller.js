'use strict'

const User = require('../models/user')

exports.post = async(req, res, next) => {
    try{
        const user = req.body;
        await User.addUser(user, res);
    }catch (error) {
        res.send({
            message: 'failed to process'
        })
    }
}

exports.get = async(req, res, next) => {
    try{
        const id = parseInt(req.params.id)
        User.findUserById(id, res);
    }catch (error) {
        res.send({
            message: 'failed to process'
        })
    }
}

exports.patch = (req, res, next) => {
    const id = parseInt(req.params.id)
    const values = req.body

    User.alterUserById(id, values, res)
    
};    

exports.delete = async(req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        User.deleteUserById(id, res)
    }catch (error) {
        res.send({
            message: 'failed to process'
        })
    }
}

'use strict'

const User = require('../models/user')

exports.post = (req, res, next) => {
    const user = req.body

    User.addUser(user, res,);
}

exports.get = (req, res, next) => {
    const id = parseInt(req.params.id)

    User.findUserById(id, res);
}

exports.patch = (req, res, next) => {
    const id = parseInt(req.params.id)
    const values = req.body

    User.alterUserById(id, values, res)
    
};    

exports.delete = (req, res, next) => {
    const id = parseInt(req.params.id);
    
    User.deleteUserById(id, res)
};

const connection = require('../../infra/connection')

class User {
    addUser(user, res) {
        const sql = 'INSERT INTO users SET ?'

        connection.query(sql, user, (error, result) => {
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(201).json(result)
            }
        })
    }

    findUserById(id, res) {
        const sql = `SELECT * FROM users WHERE id=${id}`
        
        connection.query(sql, (error, result) => {
            const user = result[0]
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(user)
            }
        })

    }

    alterUserById(id, values, res) {
        const sql = 'UPDATE users SET ? WHERE id=?'

        connection.query(sql,[values, id], (error, result) => {
            if(error) {
                res.status(400).json(error)
            }else {
                res.status(200).json(result)
            }
        })

    }

    deleteUserById(id, res){
        const sql = 'DELETE FROM users WHERE id=?'

        connection.query(sql, id, (error, result) => {
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(200).json({id})
            }
        })
    }
}


module.exports = new User

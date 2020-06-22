const connection = require('../../infra/connection')

class User {
  async addUser(user, res) {
        const { results } = await connection.query({
            sql: `
                    INSERT INTO
                        users
                        (
                            firstname, 
                            lastname, 
                            email
                        )
                    VALUES
                        (
                            :val1,
                            :val2,
                            :val3
                        )
                    ;
                `,
            params: {
                val1: user.firstname,
                val2: user.lastname,
                val3: user.email,    
            },
        });
       
        res.json(results)
    }

    async findUserById(id, res) {
        const sql = `SELECT * FROM users WHERE id=${id}`

        const result = await connection.query({sql})
        res.status(201).json(result.results)

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

   async deleteUserById(id, res){
        const sql = `DELETE FROM users WHERE id=${id}`
        const result = await connection.query({sql})

        res.status(201).json(result)
    }
}


module.exports = new User

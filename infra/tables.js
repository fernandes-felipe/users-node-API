class Tables {
    init(connection) {
       this.connection = connection

       this.createUsers()
    }

    createUsers() {
        const sql = 'CREATE TABLE users (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(30) NOT NULL, lastname VARCHAR(30) NOT NULL, email VARCHAR(50))'
        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro);
            } else {
                console.log('Users table successfully created')
            }


        });
    }
}

module.exports = new Tabelas;
const { MySQL } = require('mysql-promisify');

const connection = new MySQL({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'users',
});

module.exports = connection;
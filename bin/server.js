'use strict'
    
const app = require ('../src/app');
const debug = require('debug')('nodestr:server');
const http = require('http');

const port = normalizerPort(process.env.PORT || '3001');
app.set('port',port);

const server = http.createServer(app);


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log('API rodando na porta ' + port);

function normalizerPort(val) {
    const port = parseInt(val,10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe' + port :
        'Port' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind = 'requires elevated privileges');
            process.exit(1);
            break;
        case 'EADORINUSE':
            console.error(bind + 'is already is use');
            process.exit(1);   
            break;
        default:
            throw error;             
    }    
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'

        ? 'pipe' + addr 
        : 'port' + addr.port;

    debug('Listening on ' + bind);    
}   
#!/usr/bin/env node

import dotenv from 'dotenv'
import http from 'http'
import createDebug from 'debug'

import { app } from './app'

dotenv.config()

const debug = createDebug('ory-auth-demo:server');
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val: string): number | string | false {
  const parsedPort = parseInt(val, 10);

  if (Number.isNaN(parsedPort)) {
    return val;
  }

  if (parsedPort >= 0) {
    return parsedPort;
  }

  return false;
}

function onError(error: NodeJS.ErrnoException) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  if (addr === null) {
    return;
  }

  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

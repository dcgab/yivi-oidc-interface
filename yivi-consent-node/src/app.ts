import path from 'path';
import express, {  } from "express";
// import jwt from 'jsonwebtoken';
import ViteExpress from "vite-express"
import dotenv from 'dotenv';
dotenv.config();
import { runtimeConfig } from './config';

import login from './routes/login';
import status from './routes/status';
import start from './routes/start';
import result from './routes/result';
import complete from './routes/complete';
import consent from './routes/consent';

const app = express();

app.set("views", path.join(process.cwd(), './src/views'));
app.set("view engine", "ejs");
app.use(express.urlencoded());

// app.use((_, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
//   next()
// })

app.use('/', express.static(path.join(process.cwd(), './dist/public')));

// app.get('/', (_, res) => {
//   res.sendFile(path.join(process.cwd(), 'client/dist/index.html'))
// });

app.use('/login', login);
app.use('/status', status);
app.use('/start', start);
app.use('/result', result)
app.use('/complete', complete);
app.use('/consent', consent);

app.all('/{*splat}', (_, res) => {
  res.sendStatus(404);
})

ViteExpress.listen(app, runtimeConfig.port, () =>
  console.log(`Server is listening on port ${runtimeConfig.port}...`),
);

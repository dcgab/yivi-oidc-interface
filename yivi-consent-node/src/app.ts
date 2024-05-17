import path from 'path';
import express from "express";
// import jwt from 'jsonwebtoken';
import ViteExpress from "vite-express"

import login from './routes/login';
import start from './routes/start';
import result from './routes/result';
import complete from './routes/complete';

const app = express();
app.use(express.urlencoded());

// app.use((_, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
//   next()
// })

app.use('/assets', express.static(path.join(process.cwd(), './client/dist/assets'), {

}))

// app.get('/', (_, res) => {
//   res.sendFile(path.join(process.cwd(), 'client/dist/index.html'))
// });

app.use('/login', login);
app.use('/start', start);
app.use('/result', result)
app.use('/complete', complete);

app.all('*', (_ , res) => {
  res.sendStatus(404);
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
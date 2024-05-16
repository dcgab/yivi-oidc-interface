import path from 'path';
import express from "express";
// import jwt from 'jsonwebtoken';
import ViteExpress from "vite-express";
// @ts-ignore
import IrmaBackend from '@privacybydesign/irma-backend';


const irmaBackend = new IrmaBackend("http://localhost:8088", {serverToken: false, debugging: true})

const irmaRequest = {
  '@context': 'https://irma.app/ld/request/disclosure/v2',
  'disclose': [
    [[ "pbdf.sidn-pbdf.mobilenumber.mobilenumber"]],
    [[ "pbdf.sidn-pbdf.email.email" ]]
  ]
}

const app = express();
app.use(express.urlencoded());

app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  next()
})

app.use('/assets', express.static(path.join(process.cwd(), './client/dist/assets'), {

}))

app.get('/', (_, res) => {
  res.sendFile(path.join(process.cwd(), 'client/dist/index.html'))
});

app.get('/start', (_, res) => {
  irmaBackend.startSession(irmaRequest)
  .then((result: any) => {
    res.json(result);
  })
  .catch((e: any) => {
    console.log(JSON.stringify(e));
    
  })
})

app.get('/result/:sessionToken', (req, res) => {
  if(!req.params.sessionToken) res.sendStatus(400);
  irmaBackend.getSessionResultJwt(req.params.sessionToken)
    .then((result: any) => {
      return res.json({jwt: result});
    })
    .catch((e: any) => {
      console.log(e);
      res.sendStatus(400);
    })
})

app.post('/complete', async (_, res) => {
  // console.log("COMPLETED: ", req.body.jwt);
  // const jwtToken = req.body.jwt;
  
  // const publicKey = await irmaBackend.getServerPublicKey()
  // const result = jwt.verify(jwtToken, publicKey);  

  // res.json(jwtToken);
  res.redirect('/');
})

app.all('*', (_ , res) => {
  res.sendStatus(404);
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
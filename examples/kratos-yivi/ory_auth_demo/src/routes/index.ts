import express, {Request, Response, NextFunction} from 'express'
import ory from '../auth'
import { Session } from '@ory/client';
const router = express.Router();

/* GET home page. */
router.get('/', async function(req: Request, res: Response, next: NextFunction) {
  let session: Session|null;
  // ory.toSession()
  //   .then(session => {
  //     session = session
  //     res.render('index', { title: 'Express', session: 0 });
  //   })
  //   .catch(error => {
  //     // console.log(error.response?.data?.error);
  //     // res.redirect('/.ory/ui/login')
      
  //   })
  let logout_url = ''
  
  try {
    let logoutRes = await ory.createBrowserLogoutFlow({cookie: req.header("cookie"), returnTo: `${process.env.APP_URL}`})
    logout_url = logoutRes.data.logout_url
  } catch(error: any) {
    console.log('Could not found session for logout_url');
    console.log(error.response.data.error);
    
  }

  try {
    let sessionRes = await ory.toSession({cookie: req.header("cookie")});
    session = sessionRes.data
  } catch {
    session = null
  }

  res.render('index', { title: 'Express', session: session ? session : '', logout_url: logout_url, ory_ui_url: process.env.ORY_UI_URL, from: req.query.from});
  

  // await ory.createBrowserLogoutFlow({cookie: req.header("cookie"), returnTo: `${process.env.APP_URL}`})
  //   .then(result => {
  //     logout_url = result.data.logout_url
      
      


  //     // result = await ory.toSession({cookie: req.header("cookie")}).catch(error => {
  //     //   err = error
  //     // }) ?? null;
  //     // console.log(result)

      
  //   })
  //   .catch(raw_error => {
  //     const error = raw_error.response.data.error
  //     if(error.id === 'session_inactive') {
  //       console.log('No session found');
  //       return
  //     }
  //     console.log('Failed to retrieve logout url');
  //     console.log(error.response.data);
      
  //   })

  // ory.toSession({cookie: req.header("cookie")})
  //   .then(result => {
  //     res.render('index', { title: 'Express', session: result ? result?.data : '', logout_url: logout_url});
  //   })
  //   .catch(error => {
  //     console.log(error.data);
      
  //   })


  // let logout_url = (await ory.createBrowserLogoutFlow({cookie: req.header("cookie"), returnTo: `${process.env.APP_URL}`}).catch(error => {
  //   console.log(error.response.data.error);
    
  //   return
  // }))?.data?.logout_url ?? null;
  
  
  
});
module.exports = router;

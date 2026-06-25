import type {Request, Response, NextFunction} from 'express';
import express from 'express'
import ory from '../auth'
import type { Session } from '@ory/kratos-client';

const router = express.Router();

const getOryErrorId = (error: unknown): string | undefined => {
  if (
    typeof error !== "object" ||
    error === null ||
    !("response" in error) ||
    typeof error.response !== "object" ||
    error.response === null ||
    !("data" in error.response) ||
    typeof error.response.data !== "object" ||
    error.response.data === null ||
    !("error" in error.response.data) ||
    typeof error.response.data.error !== "object" ||
    error.response.data.error === null ||
    !("id" in error.response.data.error) ||
    typeof error.response.data.error.id !== "string"
  ) {
    return undefined
  }

  return error.response.data.error.id
}

router.get('/', async function(req: Request, res: Response, _next: NextFunction) {
  let session: Session | null;
  let logoutUrl = ''

  try {
    const logoutRes = await ory.createBrowserLogoutFlow({
      cookie: req.header("cookie"),
      returnTo: `${process.env.APP_URL}`,
    });
    logoutUrl = logoutRes.data.logout_url
  } catch(error: unknown) {
    const oryErrorId = getOryErrorId(error)
    if (oryErrorId !== 'session_inactive') {
      console.log('Failed to retrieve logout url');
      console.log(error);
    }
  }

  try {
    const sessionRes = await ory.toSession({cookie: req.header("cookie")});
    session = sessionRes.data
  } catch {
    session = null
  }

  res.render('index', {
    title: 'Express',
    session: session ?? '',
    logout_url: logoutUrl,
    ory_ui_url: process.env.ORY_UI_URL,
    from: req.query.from,
  });
});

export default router;

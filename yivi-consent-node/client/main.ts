

import '@privacybydesign/yivi-css'
import './index.css'
import { newWeb } from '@privacybydesign/yivi-frontend';
import type { SessionMappings, YiviOptions } from '@privacybydesign/yivi-frontend';
import { jwtDecode } from 'jwt-decode';

const yiviBackendUrl = import.meta.env.VITE_YIVI_BACKEND_URL;
if (!yiviBackendUrl) {
  throw new Error('Missing required frontend configuration: VITE_YIVI_BACKEND_URL');
}

const yiviFrontendDebug = String(import.meta.env.VITE_YIVI_FRONTEND_DEBUG ?? 'false').toLowerCase() === 'true';

type JwtResult = {
  jwt: string;
}

type SessionUrlOptions = {
  url?: string;
}

const isJwtResult = (value: unknown): value is JwtResult =>
  typeof value === 'object' &&
  value !== null &&
  'jwt' in value &&
  typeof value.jwt === 'string'

const options: YiviOptions = {
  // Developer options
  debugging: yiviFrontendDebug,

  // Front-end options
  language: 'en',
  translations: {
    header: 'Log in with <i class="yivi-web-logo">Yivi</i>',
    loading: 'Just one second please!'
  },

  // Back-end options
  session: {
    url: yiviBackendUrl,
    start: {
      url: (o: SessionUrlOptions) =>
        `${o.url ?? ''}/start/${(new URLSearchParams(location.search)).get('login_challenge')}`,
      method: 'GET',
    },
    result: {
      url: (o: SessionUrlOptions, { sessionToken }: SessionMappings) =>
        `${o.url ?? ''}/result/${sessionToken ?? ''}`,
      method: 'GET',
    }
  }
};

const yiviWeb = newWeb({
  ...options,
  element: '#yivi-web-form',
});

yiviWeb.start()
  .then((result: unknown) => {
    if (!isJwtResult(result)) {
      throw new Error('Unexpected Yivi result payload');
    }

    let secondsRemaining = 0; // TODO: set to other value in production!
    console.log("Successful disclosure! 🎉", jwtDecode(result.jwt));
    setInterval(() => {
      (document.getElementById('redirect-text') as HTMLParagraphElement).textContent = `Success! Redirecting in ${secondsRemaining--}`;
      if (secondsRemaining === -1) {
        const form = document.createElement('form');
        form.setAttribute('method', 'post');
        form.setAttribute('action', '/login');
        const jwtInput = document.createElement('input');
        jwtInput.setAttribute('type', 'hidden');
        jwtInput.setAttribute('name', 'jwt');
        jwtInput.setAttribute('value', result.jwt);
        const challengeInput = document.createElement('input');
        challengeInput.setAttribute('type', 'hidden');
        challengeInput.setAttribute('name', 'login_challenge');
        challengeInput.setAttribute('value', (new URLSearchParams(location.search)).get('login_challenge')!);
        form.appendChild(jwtInput);
        form.appendChild(challengeInput);
        document.body.appendChild(form);
        form.submit();
      }
    }, 1000)

  })
  .catch(error => {
    if (error === 'Aborted') {
      console.log('We closed it ourselves, so no problem 😅');
      return;
    }
    console.error("Couldn't do what you asked 😢", error);
  });

document.getElementById('abort-web')!.onclick = () => { 
  yiviWeb.abort() 
  const form = document.createElement('form');
      form.setAttribute('method', 'post');
      form.setAttribute('action', '/login');
      const abortedInput = document.createElement('input');
      abortedInput.setAttribute('type', 'hidden');
      abortedInput.setAttribute('name', 'aborted');
      abortedInput.setAttribute('value', 'true');
      const challengeInput = document.createElement('input');
      challengeInput.setAttribute('type', 'hidden');
      challengeInput.setAttribute('name', 'login_challenge');
      challengeInput.setAttribute('value', (new URLSearchParams(location.search)).get('login_challenge')!);
      form.appendChild(abortedInput);
      form.appendChild(challengeInput);
      document.body.appendChild(form);
      form.submit();
};



import '@privacybydesign/yivi-css'

import yivi from '@privacybydesign/yivi-frontend';
import { jwtDecode } from 'jwt-decode';

let options = {
  // Developer options
  debugging: true,

  // Front-end options
  language: 'en',
  translations: {
    header: 'Log in with <i class="yivi-web-logo">Yivi</i>',
    loading: 'Just one second please!'
  },

  // Back-end options
  session: {
    // Point this to your IRMA server:
    url: 'http://127.0.0.1:3000',
    start: {
      url: (o) => `${o.url}/start`,
      method: 'GET',
    },
    result: {
      url: (o, { sessionPtr, sessionToken }) => `${o.url}/result/${sessionToken}`,
      method: 'GET',
    }
  }
};

const yiviWeb = yivi.newWeb({
  ...options,
  element: '#yivi-web-form',
});

yiviWeb.start()
  .then((result: { jwt: string }) => {
    let secondsRemaining = 3;
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

document.getElementById('abort-web')!.onclick = () => yiviWeb.abort();
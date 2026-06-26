

import '@privacybydesign/yivi-css'
import './index.css'
import { newWeb } from '@privacybydesign/yivi-frontend';
import type { SessionMappings, YiviOptions } from '@privacybydesign/yivi-frontend';

const yiviBackendUrl = import.meta.env.VITE_YIVI_BACKEND_URL;
if (!yiviBackendUrl) {
  throw new Error('Missing required frontend configuration: VITE_YIVI_BACKEND_URL');
}

const yiviFrontendDebug = String(import.meta.env.VITE_YIVI_FRONTEND_DEBUG ?? 'false').toLowerCase() === 'true';
const loginChallenge = new URLSearchParams(location.search).get('login_challenge');
const redirectText = document.getElementById('redirect-text') as HTMLParagraphElement | null;
const abortButton = document.getElementById('abort-web') as HTMLButtonElement | null;

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

const setStatus = (message: string): void => {
  if (redirectText) {
    redirectText.textContent = message;
  }
}

const createHiddenInput = (name: string, value: string): HTMLInputElement => {
  const input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', name);
  input.setAttribute('value', value);
  return input;
}

const submitLoginForm = (fields: Record<string, string>): void => {
  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', '/login');
  for (const [name, value] of Object.entries(fields)) {
    form.appendChild(createHiddenInput(name, value));
  }
  document.body.appendChild(form);
  form.submit();
}

if (!loginChallenge) {
  setStatus('Login cannot start because the login challenge is missing.');
  if (abortButton) {
    abortButton.disabled = true;
  }
  throw new Error('Missing login challenge');
}

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
        `${o.url ?? ''}/start/${loginChallenge}`,
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

    if (yiviFrontendDebug) {
      console.debug('Yivi disclosure completed');
    }
    setStatus('Success. Redirecting...');
    submitLoginForm({
      jwt: result.jwt,
      login_challenge: loginChallenge,
    });
  })
  .catch(error => {
    if (error === 'Aborted') {
      if (yiviFrontendDebug) {
        console.debug('Yivi disclosure flow aborted');
      }
      return;
    }
    setStatus('The Yivi login flow failed. Please try again.');
    if (yiviFrontendDebug) {
      console.error('Yivi disclosure flow failed', error);
    }
  });

if (abortButton) {
  abortButton.onclick = () => {
    yiviWeb.abort();
    submitLoginForm({
      aborted: 'true',
      login_challenge: loginChallenge,
    });
  };
};

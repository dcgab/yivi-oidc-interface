import dotenv from 'dotenv';
import { Configuration, OAuth2Api } from "@ory/client";
import { YiviHttpClient } from './yivi';

dotenv.config();

type RuntimeConfig = {
  port: number;
  hydraAdminUrl: string;
  irmaServerUrl: string;
  irmaServerToken: string | false;
  yiviBackendDebug: boolean;
};

const parseBoolean = (name: string, defaultValue: boolean): boolean => {
  const value = process.env[name];
  if (value === undefined || value === '') {
    return defaultValue;
  }
  if (['true', '1', 'yes', 'on'].includes(value.toLowerCase())) {
    return true;
  }
  if (['false', '0', 'no', 'off'].includes(value.toLowerCase())) {
    return false;
  }
  throw new Error(`Invalid configuration ${name}: expected boolean value`);
};

const required = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required configuration: ${name}`);
  }
  return value;
};

const normalizeHydraAdminUrl = (value: string): string => {
  const normalized = value.trim().replace(/\/+$/, '');
  if (normalized === '') {
    throw new Error('Invalid configuration HYDRA_ADMIN_URL: expected non-empty URL');
  }

  // The Ory SDK already includes the /admin path for OAuth2 admin endpoints.
  return normalized.replace(/\/admin$/, '');
};

const optionalToken = (name: string): string | false => {
  const value = process.env[name];
  return value && value.trim() !== '' ? value : false;
};

const parsePort = (): number => {
  const raw = process.env.PORT ?? '3000';
  const port = Number(raw);
  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error(`Invalid configuration PORT: expected integer between 1 and 65535`);
  }
  return port;
};

const runtimeConfig: RuntimeConfig = {
  port: parsePort(),
  hydraAdminUrl: normalizeHydraAdminUrl(required('HYDRA_ADMIN_URL')),
  irmaServerUrl: required('IRMA_SERVER_URL'),
  irmaServerToken: optionalToken('IRMA_SERVER_TOKEN'),
  yiviBackendDebug: parseBoolean('YIVI_BACKEND_DEBUG', false),
};

const yiviClient = new YiviHttpClient({
  baseUrl: runtimeConfig.irmaServerUrl,
  requesterToken: runtimeConfig.irmaServerToken,
  debug: runtimeConfig.yiviBackendDebug,
});

const configuration = new Configuration({
  basePath: runtimeConfig.hydraAdminUrl,
});

const hydraAdmin = new OAuth2Api(configuration);

export {
  runtimeConfig,
  yiviClient,
  hydraAdmin,
};

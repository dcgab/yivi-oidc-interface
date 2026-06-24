type YiviClientConfig = {
  baseUrl: string;
  requesterToken: string | false;
  debug: boolean;
};

type RequestOptions = {
  method: 'GET' | 'POST';
  path: string;
  body?: unknown;
};

const trimTrailingSlashes = (value: string): string => value.replace(/\/+$/, '');

const joinUrl = (baseUrl: string, path: string): string =>
  `${trimTrailingSlashes(baseUrl)}${path.startsWith('/') ? path : `/${path}`}`;

const formatBody = (body: unknown): string | undefined =>
  body === undefined ? undefined : JSON.stringify(body);

class YiviHttpClient {
  private readonly baseUrl: string;
  private readonly requesterToken: string | false;
  private readonly debug: boolean;

  constructor(config: YiviClientConfig) {
    this.baseUrl = trimTrailingSlashes(config.baseUrl);
    this.requesterToken = config.requesterToken;
    this.debug = config.debug;
  }

  private async request<T>({ method, path, body }: RequestOptions): Promise<T> {
    const headers: Record<string, string> = {
      Accept: 'application/json',
    };
    const serializedBody = formatBody(body);
    if (serializedBody !== undefined) {
      headers['Content-Type'] = 'application/json';
    }
    if (this.requesterToken) {
      headers.Authorization = this.requesterToken;
    }

    const url = joinUrl(this.baseUrl, path);
    if (this.debug) {
      console.log(`[yivi] ${method} ${url}`);
    }

    const response = await fetch(url, {
      method,
      headers,
      body: serializedBody,
    });

    if (!response.ok) {
      const responseText = await response.text();
      throw new Error(
        `Yivi request failed (${response.status} ${response.statusText}) for ${method} ${path}: ${responseText}`,
      );
    }

    const contentType = response.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
      return (await response.json()) as T;
    }

    return (await response.text()) as T;
  }

  createSession(request: unknown): Promise<unknown> {
    return this.request<unknown>({
      method: 'POST',
      path: '/session',
      body: request,
    });
  }

  getSessionResultJwt(sessionToken: string): Promise<string> {
    return this.request<string>({
      method: 'GET',
      path: `/session/${encodeURIComponent(sessionToken)}/result-jwt`,
    });
  }

  getPublicKey(): Promise<string> {
    return this.request<string>({
      method: 'GET',
      path: '/publickey',
    });
  }
}

export { YiviHttpClient };

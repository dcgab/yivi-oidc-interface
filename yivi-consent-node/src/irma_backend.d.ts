declare module "@privacybydesign/irma-backend" {
    export default IrmaBackend;
    class IrmaBackend {
        static get SessionStatus(): {
            Initialized: string;
            Connected: string;
            Cancelled: string;
            Done: string;
            Timeout: string;
        };
        constructor(serverUrl: any, options: any);
        _sessionStates: {};
        _serverUrl: any;
        _options: {
            debugging: boolean;
            serverToken: boolean;
        };
        _serverFetch(endpoint: any, requestOptions: any): Promise<Response>;
        startSession(request: any): Promise<any>;
        cancelSession(sessionToken: any): Promise<any>;
        getSessionResult(sessionToken: any): Promise<any>;
        getSessionResultJwt(sessionToken: any): Promise<string>;
        getSessionStatus(sessionToken: any): Promise<any>;
        getServerPublicKey(): Promise<string>;
        subscribeStatusEvents(sessionToken: any, eventCallback: any): void;
        _sanitizeOptions(options: any): {
            debugging: boolean;
            serverToken: boolean;
        };
    }

    declare class SessionState {
        constructor(url: any, options: any);
        _eventSource(): any;
        _running: boolean;
        _options: {
            debugging: any;
            serverSentEvents: {
                url: (o: any) => string;
                timeout: number;
            };
            polling: {
                url: (o: any) => string;
                interval: number;
                startState: boolean;
            };
        };
        _observers: any[];
        observe(stateChangeCallback: any): void;
        close(): void;
        _notifyObservers(error: any, status: any): void;
        _startSSE(): void;
        _source: any;
        _startPolling(): Promise<void>;
        _sanitizeOptions(options: any): {
            debugging: any;
            serverSentEvents: {
                url: (o: any) => string;
                timeout: number;
            };
            polling: {
                url: (o: any) => string;
                interval: number;
                startState: boolean;
            };
        };
    }

    export const Initialized: string;
    export const Connected: string;
    export const Cancelled: string;
    export const Done: string;
    export const Timeout: string;
};
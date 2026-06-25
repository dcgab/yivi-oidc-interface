declare module "debug" {
  type Debugger = (...args: unknown[]) => void
  export default function createDebug(namespace: string): Debugger
}

declare module "morgan" {
  import type { RequestHandler } from "express"
  export default function morgan(format: string): RequestHandler
}

declare module "cookie-parser" {
  import type { RequestHandler } from "express"
  export default function cookieParser(
    secret?: string | string[],
    options?: unknown,
  ): RequestHandler
}

declare module "http-errors" {
  export interface HttpError extends Error {
    status?: number;
  }

  export default function createError(status: number): HttpError
}

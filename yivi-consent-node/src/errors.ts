import type { ErrorRequestHandler, RequestHandler } from "express";

import { getResponseErrorDescription } from "./types";

type ErrorCode =
  | "bad_request"
  | "consent_failed"
  | "login_failed"
  | "not_found"
  | "upstream_error"
  | "yivi_error";

class AppError extends Error {
  readonly statusCode: number;
  readonly publicMessage: string;
  readonly code: ErrorCode;
  readonly cause?: unknown;

  constructor(
    statusCode: number,
    publicMessage: string,
    code: ErrorCode,
    cause?: unknown,
  ) {
    super(publicMessage);
    this.name = "AppError";
    this.statusCode = statusCode;
    this.publicMessage = publicMessage;
    this.code = code;
    this.cause = cause;
  }
}

const badRequest = (message: string): AppError =>
  new AppError(400, message, "bad_request");

const upstreamError = (
  fallbackMessage: string,
  cause: unknown,
  code: ErrorCode = "upstream_error",
): AppError => {
  if (cause instanceof AppError) {
    return cause;
  }

  return new AppError(
    400,
    getResponseErrorDescription(cause) ?? fallbackMessage,
    code,
    cause,
  );
};

const notFoundHandler: RequestHandler = (_req, _res, next) => {
  next(new AppError(404, "Not found", "not_found"));
};

const errorHandler: ErrorRequestHandler = (error, req, res, _next) => {
  const appError =
    error instanceof AppError
      ? error
      : new AppError(500, "Internal server error", "upstream_error", error);

  if (!(error instanceof AppError) && req.app.get("env") !== "test") {
    console.error("Unhandled request error", {
      path: req.path,
      method: req.method,
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }

  res.status(appError.statusCode).send(appError.publicMessage);
};

export { AppError, badRequest, errorHandler, notFoundHandler, upstreamError };

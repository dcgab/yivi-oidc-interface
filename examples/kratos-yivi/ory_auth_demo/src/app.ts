import type { NextFunction, Request, Response } from "express";
import express from "express"
import createError from 'http-errors'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import usersRouter from './routes/users';

export const app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(_req: Request, _res: Response, next: NextFunction) {
  next(createError(404));
});

const errorHandler = (err: unknown, req: Request, res: Response, _next: NextFunction) => {
  const message = err instanceof Error ? err.message : "Unknown error";
  const statusCode =
    typeof err === "object" &&
    err !== null &&
    "status" in err &&
    typeof err["status"] === "number"
      ? err["status"]
      : 500

  res.locals.message = message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(statusCode);
  res.render('error');
};

app.use(errorHandler);

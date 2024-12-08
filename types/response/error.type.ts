type ErrorHandler = {
  status: "Error";
  statusCode: number;
  message: string;
};

type BadRequestError = ErrorHandler & {
  statusCode: 400;
};

type UnauthorizedError = ErrorHandler & {
  statusCode: 401;
};

type ForbiddenError = ErrorHandler & {
  statusCode: 403;
};

type NotFoundError = ErrorHandler & {
  statusCode: 404;
};


type ConflictError = ErrorHandler & {
  statusCode: 409;
};

type ServiceUnavailableError = ErrorHandler & {
  statusCode: 503;
};

export type {
  ErrorHandler,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
  ServiceUnavailableError,
};

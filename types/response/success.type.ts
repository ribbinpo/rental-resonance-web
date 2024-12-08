type SuccessHandler<T> = {
  statusCode: number;
  message?: string;
  result?: T;
  status: "Success";
};

export type { SuccessHandler };

export enum ErrorStatus {
  NotFound = 404,
}

export type RouteError = {
  data: string;
  error?: {
    message: string;
    stack: string;
  };
  internal: boolean;
  status: ErrorStatus;
  statusText: string;

  message?: string;
}

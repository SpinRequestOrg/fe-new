export interface ApiResponse<T> {
  data: T;
  message: string;
}
export interface ApiError {
  name: string;
  status: number;
  statusCode: number;
  message: string;
  data?: {
    message?: string;
  };
}

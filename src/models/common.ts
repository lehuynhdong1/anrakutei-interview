export interface CallBackAction<T> {
  onSuccess?: (data?: any) => void;
  onError?: (error: any) => void;
  data?: T;
}

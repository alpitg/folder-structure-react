export class AppStore<T> {
  result?: T | null | undefined;
  pending: boolean;
  error: any[];

  constructor() {
    this.pending = false;
    this.error = [];
  }
}

export interface IAxiosResponse<T> {
  data: T;
}

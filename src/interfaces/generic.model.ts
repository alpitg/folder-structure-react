export interface IAppStore<T> {
    result: T | null | undefined;
    pending: boolean;
    error: string;
}

export class AppStore<T> implements IAppStore<T> {
    result: T | null | undefined;
    pending: boolean;
    error: string;

    constructor() {
        this.result = {} as T;
        this.pending = false;
        this.error = "";
    }
}

export interface IAxiosResponse<T> {
    data: T;
}

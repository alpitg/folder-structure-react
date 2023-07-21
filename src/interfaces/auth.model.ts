
/**
 * @Rulebook
 * Interface name should have prefix - `I` & suffix - `Model`. 
 * example: IAuthenticationModel
 */

export interface IAuthenticationModel {
    isValid: boolean;
    details: any;
}

export interface IAuthenticationRequestModel {
    userId: string;
    password: string;
}

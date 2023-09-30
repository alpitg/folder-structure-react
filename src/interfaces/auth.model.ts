/**
 * @Rulebook
 * Interface name should have prefix - `I` & suffix - `Model`.
 * example: IClaimModel
 */
export interface IClaimModel {
  claimType: string;
  claimValue: boolean;
}

export class AuthenticationModel {
  id: string;
  tenantId: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  bearerToken: string;
  isAuthenticated: boolean;
  profilePhoto: string;
  claims: IClaimModel[];
  /**
   *
   */
  constructor() {
    this.id = "";
    this.tenantId = "";
    this.userName = "";
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.phoneNumber = "";
    this.bearerToken = "";
    this.isAuthenticated = false;
    this.profilePhoto = "";
    this.claims = [];
  }
}

export interface IAuthenticationRequestModel {
  userName: string;
  password: string;
  remoteIp: string;
  latitude: string;
  longitude: string;
}

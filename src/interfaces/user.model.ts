export interface IUserResponseModel {
  totalCount: number;
  items: IUserModel[];
  success: boolean;
  error: string;
  unAuthorizedRequest: boolean;
}

export interface IUserModel {
  id: string;
  mailId: string;
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  lockoutEndDateUtc: string;
  phoneNumber: string;
  profilePictureId: string;
  isEmailConfirmed: boolean;
  roles: IUserRoleModel[];
  isActive: boolean;
  creationTime: any;
}

export class UserModel implements IUserModel {
  id: string;
  mailId: string;
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  lockoutEndDateUtc: string;
  phoneNumber: string;
  profilePictureId: string;
  isEmailConfirmed: boolean;
  roles: IUserRoleModel[];
  isActive: boolean;
  creationTime: any;

  constructor() {
    this.id = "";
    this.mailId = "";
    this.name = "";
    this.surname = "";
    this.userName = "";
    this.emailAddress = "";
    this.lockoutEndDateUtc = "";
    this.phoneNumber = "";
    this.profilePictureId = "";
    this.isEmailConfirmed = false;
    this.roles = [];
    this.isActive = false;
    this.creationTime = new Date();
  }
}

export interface IUserFormModel {
  id: string;
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  phoneNumber: string;
  password: string;
  isActive: boolean;
  shouldChangePasswordOnNextLogin: boolean;
  isTwoFactorEnabled: boolean;
  isLockoutEnabled: boolean;
  roles: IUserRoleFormModel[];
  isError: {
    name: string;
    surname: string;
    userName: string;
    emailAddress: string;
    phoneNumber: string;
    password: string;
    isActive: string;
  };
  fieldName: {
    id: string;
    name: string;
    surname: string;
    userName: string;
    emailAddress: string;
    phoneNumber: string;
    password: string;
    isActive: string;
    shouldChangePasswordOnNextLogin: string;
    isTwoFactorEnabled: string;
    isLockoutEnabled: string;
  };
}

export interface IUserRoleFormModel {
  inheritedFromOrganizationUnit: boolean;
  isAssigned: boolean;
  roleDisplayName: string;
  roleId: string;
  roleName: string;
}

export interface IUserRoleModel {
  roleId: number;
  roleName: string;
}

export interface IUsersRequestModel {
  id: string;
  name: string;
  mailId: string;
}

//#region Role model - Reducer

export interface IUserAppStore {
  list: {
    result: IUserResponseModel | null | undefined;
    pending: boolean;
    error: string;
  };
  view: {
    result: IUserModel | null | undefined;
    pending: boolean;
    error: string;
  };
  update: {
    result: IUserModel | null | undefined;
    pending: boolean;
    error: string;
  };
  delete: {
    result: IUserModel | null | undefined;
    pending: boolean;
    error: string;
  };
}

export class UserAppStore implements IUserAppStore {
  list: {
    result: IUserResponseModel | null | undefined;
    pending: boolean;
    error: string;
  };
  view: {
    result: IUserModel | null | undefined;
    pending: boolean;
    error: string;
  };
  update: {
    result: IUserModel | null | undefined;
    pending: boolean;
    error: string;
  };
  delete: {
    result: IUserModel | null | undefined;
    pending: boolean;
    error: string;
  };

  constructor() {
    this.list = {
      result: null,
      pending: false,
      error: "",
    };
    this.view = {
      result: null,
      pending: false,
      error: "",
    };
    this.update = {
      result: null,
      pending: false,
      error: "",
    };
    this.delete = {
      result: null,
      pending: false,
      error: "",
    };
  }
}

//#endregion

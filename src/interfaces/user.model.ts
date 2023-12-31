
export interface IUserClaimsModel {
  userId: string;
  claimType: string;
  claimValue: string;
  actionId: string;
}

export class UserModel {
  id?: string;
  tenantId?: string;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  profilePhoto?: string;
  provider?: string;
  password?: string;
  isEmailConfirmed?: boolean;
  isActive: boolean;
  isImageUpdate?: boolean;
  ShouldChangePasswordOnNextLogin?: boolean;
  imgSrc?: string;
  userRoles?: IUserRoleModel[];
  userClaims?: IUserClaimsModel[];

  constructor() {
    this.id = undefined;
    this.tenantId = undefined;
    this.userName = "";
    this.email = "";
    this.firstName = "";
    this.lastName = "";
    this.phoneNumber = "";
    this.address = "";
    this.profilePhoto = "";
    this.provider = "";
    this.password = "";
    this.isEmailConfirmed = false;
    this.isActive = true;
    this.isImageUpdate = false;
    this.ShouldChangePasswordOnNextLogin = false;
    this.imgSrc = "";
    this.userRoles = [];
    this.userClaims = [];
  }
}
export class UserFormModel extends UserModel {

  isError: {
    id: string;
    tenantId: string;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    phoneNumber: string;
    address: string;
    isActive: string;
  };
  fieldName: {
    id: string;
    tenantId: string;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    phoneNumber: string;
    address: string;
    isActive: string;
    userRoles: string;
    ShouldChangePasswordOnNextLogin: string;
    isLockoutEnabled: string;
  };

  constructor() {
    super()

    this.isError = {
      id: "",
      tenantId: "",
      userName: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      phoneNumber: "",
      address: "",
      isActive: "",
    };
    this.fieldName = {
      id: "id",
      tenantId: "tenantId",
      userName: "userName",
      email: "email",
      firstName: "firstName",
      lastName: "lastName",
      password: "password",
      phoneNumber: "phoneNumber",
      address: "address",
      isActive: "isActive",
      userRoles: "userRoles",
      ShouldChangePasswordOnNextLogin: "ShouldChangePasswordOnNextLogin",
      isLockoutEnabled: "isLockoutEnabled",
    };
  }
}

export interface IUserRoleFormModel {
  inheritedFromOrganizationUnit: boolean;
  isAssigned: boolean;
  roleDisplayName: string;
  roleId: string;
  roleName: string;
}

export interface IUserRoleModel {
  roleName?: string;
  userId: string;
  roleId: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
}

export interface IUsersRequestModel {
  tenantId?: string;
  name: string;
  Fields: string;
  OrderBy: string;
  PageSize: number;
  Skip: number;
  SearchQuery: string;
}

//#region Role model - Reducer

export class UserAppStore {
  list: {
    result: UserModel[] | null | undefined;
    pending: boolean;
    error: any[];
  };
  view: {
    result: UserModel | null | undefined;
    pending: boolean;
    error: any[];
  };
  update: {
    result: UserModel | null | undefined;
    pending: boolean;
    error: any[];
  };
  delete: {
    result: UserModel | null | undefined;
    pending: boolean;
    error: any[];
  };

  constructor() {
    this.list = {
      result: null,
      pending: false,
      error: [],
    };
    this.view = {
      result: null,
      pending: false,
      error: [],
    };
    this.update = {
      result: null,
      pending: false,
      error: [],
    };
    this.delete = {
      result: null,
      pending: false,
      error: [],
    };
  }
}

//#endregion

export interface IRoleModel {
  id?: string;
  name: string;
  createdDate?: string;
  isDefault?: boolean;
  roleClaims: IRoleClaimsModel[];
  userRoles?: any[];
}

export interface IRoleClaimsModel {
  actionId: string;
  claimType: string;
  claimValue: string;
  id?: number;
  roleId?: string;
}

export interface IRolesRequestModel {
  id: string;
  name: string;
  createdDate: string;
  isDefault: boolean;
}

export interface IRoleFormModel {
  id: string;
  name: string;
  createdDate: string;
  isDefault: boolean;
  roleClaims: IRoleClaimsModel[];
  isError: {
    name: string;
  };
  fieldName: {
    name: string;
    isDefault: string;
  };
}

//#region Role model - Reducer

export interface IRoleAppStore {
  list: {
    result: IRoleModel[] | null | undefined;
    pending: boolean;
    error: any;
  };
  view: {
    result: IRoleModel | null | undefined;
    pending: boolean;
    error: any;
  };
  update: {
    result: IRoleModel | null | undefined;
    pending: boolean;
    error: any;
  };
  delete: {
    result: IRoleModel | null | undefined;
    pending: boolean;
    error: any;
  };
}

export class RoleAppStore implements IRoleAppStore {
  list: {
    result: IRoleModel[] | null | undefined;
    pending: boolean;
    error: any;
  };
  view: {
    result: IRoleModel | null | undefined;
    pending: boolean;
    error: any;
  };
  update: {
    result: IRoleModel | null | undefined;
    pending: boolean;
    error: any;
  };
  delete: {
    result: IRoleModel | null | undefined;
    pending: boolean;
    error: any;
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

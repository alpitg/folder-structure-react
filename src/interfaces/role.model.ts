export interface IRoleModel {
  id: string;
  name: string;
  createdDate: string;
  isDefault: boolean;
  grantedPermissionNames: any[];
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
  grantedPermissionNames: any[];
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
    error: string;
  };
  view: {
    result: IRoleModel | null | undefined;
    pending: boolean;
    error: string;
  };
  update: {
    result: IRoleModel | null | undefined;
    pending: boolean;
    error: string;
  };
  delete: {
    result: IRoleModel | null | undefined;
    pending: boolean;
    error: string;
  };
}

export class RoleAppStore implements IRoleAppStore {
  list: {
    result: IRoleModel[] | null | undefined;
    pending: boolean;
    error: string;
  };
  view: {
    result: IRoleModel | null | undefined;
    pending: boolean;
    error: string;
  };
  update: {
    result: IRoleModel | null | undefined;
    pending: boolean;
    error: string;
  };
  delete: {
    result: IRoleModel | null | undefined;
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

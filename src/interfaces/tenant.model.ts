export interface ITenantResponseModel {
  totalCount: number;
  items: ITenantModel[];
  success: boolean;
  error: string;
  unAuthorizedRequest: boolean;
}

export interface ITenantModel {
  id: string;
  name: string;
  displayName: string;
  isActive: boolean;
  creationTime?: any;
}

export class TenantModel implements ITenantModel {
  id: string;
  name: string;
  displayName: string;
  isActive: boolean;
  creationTime?: any;

  constructor() {
    this.id = "";
    this.name = "";
    this.displayName = "";
    this.isActive = false;
    this.creationTime = new Date();
  }
}

export interface ITenantFormModel {
  id: string;
  name: string;
  displayName: string;
  isActive: boolean;

  isError: {
    id: string;
    name: string;
    displayName: string;
  };
  fieldName: {
    id: string;
    name: string;
    displayName: string;
    isActive: string;
  };
}

export interface ITenantsRequestModel {
  id: string;
  name: string;
  mailId: string;
}

//#region Role model - Reducer

export interface ITenantAppStore {
  list: {
    result: ITenantResponseModel | null | undefined;
    pending: boolean;
    error: string;
  };
  view: {
    result: ITenantModel | null | undefined;
    pending: boolean;
    error: string;
  };
  update: {
    result: ITenantModel | null | undefined;
    pending: boolean;
    error: string;
  };
  delete: {
    result: ITenantModel | null | undefined;
    pending: boolean;
    error: string;
  };
}

export class TenantAppStore implements ITenantAppStore {
  list: {
    result: ITenantResponseModel | null | undefined;
    pending: boolean;
    error: string;
  };
  view: {
    result: ITenantModel | null | undefined;
    pending: boolean;
    error: string;
  };
  update: {
    result: ITenantModel | null | undefined;
    pending: boolean;
    error: string;
  };
  delete: {
    result: ITenantModel | null | undefined;
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

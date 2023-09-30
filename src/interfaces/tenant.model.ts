export interface ITenantModel {
  id?: string;
  name: string;
  displayName?: string;
  isActive?: boolean;
  creationTime?: any;
}

export class TenantModel implements ITenantModel {
  id?: string;
  name: string;
  displayName?: string;
  isActive?: boolean;
  creationTime?: any;

  constructor() {
    this.id = "";
    this.name = "";
    this.displayName = "";
    this.isActive = false;
    this.creationTime = new Date();
  }
}

export class TenantFormModel {
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

  constructor() {
    this.id = "";
    this.name = "";
    this.displayName = "";
    this.isActive = false;
    this.isError = {
      id: "",
      name: "",
      displayName: "",
    };
    this.fieldName = {
      id: "id",
      name: "name",
      displayName: "displayName",
      isActive: "isActive",
    };
  }
}

export interface ITenantsRequestModel {
  id: string;
  name: string;
  mailId: string;
}

//#region Role model - Reducer
export class TenantAppStore {
  list: {
    result: ITenantModel[] | null | undefined;
    pending: boolean;
    error: any;
  };
  view: {
    result: ITenantModel | null | undefined;
    pending: boolean;
    error: any;
  };
  update: {
    result: ITenantModel | null | undefined;
    pending: boolean;
    error: any;
  };
  delete: {
    result: ITenantModel | null | undefined;
    pending: boolean;
    error: any;
  };

  globalSelectedTenant: string;

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
    this.globalSelectedTenant = "";
  }
}

//#endregion

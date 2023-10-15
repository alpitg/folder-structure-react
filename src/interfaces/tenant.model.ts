
export class TenantModel {
  id?: string;
  name: string;
  email: string;
  displayName?: string;
  isActive?: boolean;
  creationTime?: any;

  constructor() {
    this.id = "";
    this.name = "";
    this.email = "";
    this.displayName = "";
    this.isActive = false;
    this.creationTime = new Date();
  }
}

export class TenantFormModel extends TenantModel {
  isError: {
    id: string;
    name: string;
    email: string;
    displayName: string;
  };
  fieldName: {
    id: string;
    name: string;
    email: string;
    displayName: string;
    isActive: string;
  };

  constructor() {
    super();

    this.isError = {
      id: "",
      name: "",
      email: "",
      displayName: "",
    };
    this.fieldName = {
      id: "id",
      name: "name",
      email: "email",
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
    result: TenantModel[] | null | undefined;
    pending: boolean;
    error: any;
  };
  view: {
    result: TenantModel | null | undefined;
    pending: boolean;
    error: any;
  };
  update: {
    result: TenantModel | null | undefined;
    pending: boolean;
    error: any;
  };
  delete: {
    result: TenantModel | null | undefined;
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

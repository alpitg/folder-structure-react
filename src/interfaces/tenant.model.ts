
export class TenantModel {
  id?: string;
  tenancyName: string;
  name: string;
  email: string;
  shouldGenerateRandomPasssword: boolean;
  shouldUseHostDatabase: boolean;
  connectionString: string;
  edition?: string;
  address?: string;
  subscriptionEndDate?: any;
  isInTrialPeriod?: boolean;
  ShouldChangePasswordOnNextLogin?: boolean;
  isActive?: boolean;

  constructor() {
    this.id = undefined;
    this.tenancyName = "";
    this.name = "";
    this.email = "";
    this.shouldGenerateRandomPasssword = true;
    this.shouldUseHostDatabase = true;
    this.connectionString = "";
    this.edition = "";
    this.address = "";
    this.subscriptionEndDate = undefined;
    this.isInTrialPeriod = false;
    this.ShouldChangePasswordOnNextLogin = false;
    this.isActive = true;
  }
}

export class TenantFormModel extends TenantModel {
  isError: {
    id: string;
    tenancyName: string;
    name: string;
    email: string;
    shouldGenerateRandomPasssword: string;
    shouldUseHostDatabase: string;
    connectionString: string;
    edition: string;
    address: string;
    subscriptionEndDate: string;
    isInTrialPeriod: string;
    ShouldChangePasswordOnNextLogin: string;
    isActive: string;
  };
  fieldName: {
    id: string;
    tenancyName: string;
    name: string;
    email: string;
    shouldGenerateRandomPasssword: string;
    shouldUseHostDatabase: string;
    connectionString: string;
    edition: string;
    address: string;
    subscriptionEndDate: string;
    isInTrialPeriod: string;
    ShouldChangePasswordOnNextLogin: string;
    isActive: string;
  };

  constructor() {
    super();

    this.isError = {
      id: "id",
      tenancyName: "",
      name: "",
      email: "",
      shouldGenerateRandomPasssword: "",
      shouldUseHostDatabase: "",
      connectionString: "",
      edition: "",
      address: "",
      subscriptionEndDate: "",
      isInTrialPeriod: "",
      ShouldChangePasswordOnNextLogin: "",
      isActive: "",
    };
    this.fieldName = {
      id: "id",
      tenancyName: "tenancyName",
      name: "name",
      email: "email",
      shouldGenerateRandomPasssword: "",
      shouldUseHostDatabase: "",
      connectionString: "connectionString",
      edition: "edition",
      address: "address",
      subscriptionEndDate: "subscriptionEndDate",
      isInTrialPeriod: "isInTrialPeriod",
      ShouldChangePasswordOnNextLogin: "ShouldChangePasswordOnNextLogin",
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

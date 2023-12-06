
export class FacilityTypeModel {
  id?: string;
  tenantId?: string;
  name: string;
  

  constructor() {
    this.id = undefined;
    this.tenantId = undefined;
    this.name = "";
    
  }
}
export interface IFacilityTypeModel {
  id?: string;
  tenantId?: string;
  name: string;
}
export class FacilityTypeFormModel extends FacilityTypeModel {

  isError: {
    id: string;
    tenantId: string;
    name: string;
     };
  fieldName: {
    id: string;
    tenantId: string;
    name: string;
  };

  constructor() {
    super()

    this.isError = {
      id: "",
      tenantId: "",
      name: "",
    
    };
    this.fieldName = {
      id: "id",
      tenantId: "tenantId",
      name: "name",
    };
  }
}

export interface IFacilityTypeRequestModel {
  tenantId?: string;
  name: string;
  Fields: string;
  OrderBy: string;
  PageSize: number;
  Skip: number;
  SearchQuery: string;
}

//#region Role model - Reducer

export class FacilityTypeAppStore {
  list: {
    result: FacilityTypeModel[] | null | undefined;
    pending: boolean;
    error: any[];
  };
  view: {
    result: FacilityTypeModel | null | undefined;
    pending: boolean;
    error: any[];
  };
  update: {
    result: FacilityTypeModel | null | undefined;
    pending: boolean;
    error: any[];
  };
  delete: {
    result: FacilityTypeModel | null | undefined;
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

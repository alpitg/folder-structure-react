
export interface IFacilityModel {
    id?: string;
    tenantId?: string;
    name: string;
    facilityTypeId: string;
    isHavingMultipleCourts: boolean;
  }

  export interface IFaciliteFormModel {
    id: string;
    tenantId: string;
    isHavingMultipleCourts: boolean;
    isError: {
      name: string;
         };
      fieldName: {
        id: string;
        tenantId: string;
        name: string;
        facilityTypeId: string;
        isHavingMultipleCourts: string;
      };
  }

export class FacilityModel {
    id?: string;
    tenantId?: string;
    name: string;
    facilityTypeId?: string;
    isHavingMultipleCourts: boolean;
  
    constructor() {
      this.id = undefined;
      this.tenantId = undefined;
      this.facilityTypeId = undefined;
      this.name = "";
      this.isHavingMultipleCourts=false;
    }
  }
  export class  FacilityFormModel extends FacilityModel {
    isError: {
      id: string;
      tenantId: string;
      name: string;
      facilityTypeId: string;
       };
    fieldName: {
      id: string;
      tenantId: string;
      name: string;
      facilityTypeId: string;
      isHavingMultipleCourts: string;
    };
  
    constructor() {
      super()
  
      this.isError = {
        id: "",
        tenantId: "",
        name: "",
        facilityTypeId: "",
      };
      this.fieldName = {
        id: "id",
        tenantId: "tenantId",
        name: "name",
        isHavingMultipleCourts: "isHavingMultipleCourts",
        facilityTypeId:"facilityTypeId", 
      };
    }
  }
   export interface   IFacilityRequestModel {
    tenantId?: string;
    name: string;
    Fields: string;
    OrderBy: string;
    PageSize: number;
    Skip: number;
    SearchQuery: string;
  }
  
  //#region Role model - Reducer
  
  export class FacilityAppStore {
    list: {
      result: FacilityModel[] | null | undefined;
      pending: boolean;
      error: any[];
    };
    view: {
      result: FacilityModel | null | undefined;
      pending: boolean;
      error: any[];
    };
    update: {
      result: FacilityModel | null | undefined;
      pending: boolean;
      error: any[];
    };
    delete: {
      result: FacilityModel | null | undefined;
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
  
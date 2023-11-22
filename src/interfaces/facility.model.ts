
export class FacilityModel {
    id?: string;
    tenantId?: string;
    firstName: string;
    isHavingMultipleCourts: boolean;
    
  
    constructor() {
      this.id = undefined;
      this.tenantId = undefined;
      this.firstName = "";
      this.isHavingMultipleCourts = false;
      
    }
  }
  export class FacilityFormModel extends FacilityModel {
  
    isError: {
      id: string;
      tenantId: string;
      firstName: string;
       };
    fieldName: {
      id: string;
      tenantId: string;
      firstName: string;
    };
  
    constructor() {
      super()
  
      this.isError = {
        id: "",
        tenantId: "",
        firstName: "",
      };
      this.fieldName = {
        id: "id",
        tenantId: "tenantId",
        firstName: "firstName",
      };
    }
  }
  
 
  
  export interface IFacilityRequestModel {
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
    
    update: {
      result: FacilityModel | null | undefined;
      pending: boolean;
      error: any[];
    };
    // delete: {
    //   result: UserModel | null | undefined;
    //   pending: boolean;
    //   error: any[];
    // };
  
    constructor() {
      this.list = {
        result: null,
        pending: false,
        error: [],
      };
      // this.view = {
      //   result: null,
      //   pending: false,
      //   error: [],
      // };
      this.update = {
        result: null,
        pending: false,
        error: [],
      };
      // this.delete = {
      //   result: null,
      //   pending: false,
      //   error: [],
      // };
    }
  }
  
  //#endregion
  
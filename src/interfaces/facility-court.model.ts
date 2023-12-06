export interface IFacilityCourtModel {
    id?: string;
    tenantId?: string;
    courtName: string;
    courtFees: number;
    facilitiesId?: string;
    courtNumber?: string;
}

export interface IFacilityCourtFormModel {
    id: string;
    tenantId: string;
    courtFees: number;
    facilitiesId: string;
    courtNumber: string;
    courtName: string;
    isError: {
      courtName: string;
         };
      fieldName: {
        id: string;
        tenantId: string;
        courtFees: string;
    facilitiesId?: string;
    courtNumber:string;
    courtName: string;
      };
  }

  export class FacilityCourtModel {
    id?: string;
    tenantId?: string;
   courtName: string;
   courtNumber: string;
   courtFees: string;
   facilitiesId?: string;

    constructor() {
      this.id = undefined;
      this.tenantId = undefined;
      this.facilitiesId = undefined;
      this.courtFees = "";
      this.courtName = "";
      this.courtNumber = "";
    }
  }

  export class FacilityCourtFormModel extends FacilityCourtModel {
    isError: {
      id: string;
      tenantId: string;
      courtName: string;
      courtNumber: string;
      facilitiesId?: string;
       };
    fieldName: {
      id: string;
      tenantId: string;
      courtName: string;
      courtNumber: string;
      courtFees: string;
      facilitiesId: string;
    };
  
    constructor() {
      super()
  
      this.isError = {
        id: "",
        tenantId: "",
        courtName: "",
        courtNumber: "",
        facilitiesId: "", 
      };
      this.fieldName = {
        id: "id",
        tenantId: "tenantId",
        courtName: "courtName",
        courtNumber: "courtNumber",
        facilitiesId:"facilitiesId",
        courtFees: "courtFees",
      };
    }
  }


  export interface IFacilityCourtRequestModel {
    tenantId?: string;
    name: string;
    Fields: string;
    OrderBy: string;
    PageSize: number;
    Skip: number;
    SearchQuery: string;
  }


  export class FacilityCourtAppStore {
    list: {
      result: FacilityCourtModel[] | null | undefined;
      pending: boolean;
      error: any[];
    };
    view: {
      result: FacilityCourtModel | null | undefined;
      pending: boolean;
      error: any[];
    };
    update: {
      result: FacilityCourtModel | null | undefined;
      pending: boolean;
      error: any[];
    };
    delete: {
      result: FacilityCourtModel | null | undefined;
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
  

export class FacilityTypeModel {
  id?: string;
  tenantId?: string;
  firstName: string;
  

  constructor() {
    this.id = undefined;
    this.tenantId = undefined;
   
    this.firstName = "";
    
  }
}
export class FacilityTypeFormModel extends FacilityTypeModel {

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

// export interface IUserRoleFormModel {
//   inheritedFromOrganizationUnit: boolean;
//   isAssigned: boolean;
//   roleDisplayName: string;
//   roleId: string;
//   roleName: string;
// }

// export interface IUserRoleModel {
//   roleName?: string;
//   userId: string;
//   roleId: string;
//   userName?: string;
//   firstName?: string;
//   lastName?: string;
// }

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
    // this.delete = {
    //   result: null,
    //   pending: false,
    //   error: [],
    // };
  }
}

//#endregion

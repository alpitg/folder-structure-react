export interface IFacilityTypeModel {
  id?: string;
  name: string;
  isDefault: boolean;

}

export interface IFacilityTypeStore {
  list: {
    result: IFacilityTypeModel[] | null | undefined;
    pending: boolean;
    error: any;
  };

  update: {
    result: IFacilityTypeModel | null | undefined;
    pending: boolean;
    error: any;
  };
}

export interface IFacilityTypeFormModel {
  id: string;
  name: string;
  createdDate: string;
  isDefault: boolean;
  isError: {
    name: string;
  };
  fieldName: {
    name: string;
    isDefault: string;
  };
}

export class FacilityTypeStore implements IFacilityTypeStore {
  list: {
    result: IFacilityTypeModel[] | null | undefined;
    pending: boolean;
    error: any;
  };

  update: {
    result: IFacilityTypeModel | null | undefined;
    pending: boolean;
    error: any;
  };

  constructor() {
    this.list = {
      result: null,
      pending: false,
      error: [],
    };
    this.update = {
      result: null,
      pending: false,
      error: [],
    };
  }
}
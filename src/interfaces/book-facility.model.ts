export class BookSloatModel {
    id?: string;
    tenantId?: string;
    facilities: string;
    facilityCourt: string;
    date: string;

    constructor() {
        this.id = undefined;
        this.tenantId = undefined;
        this.facilities = "";
        this.facilityCourt = "";
        this.date = ""
    }
}

export interface IBookSloatModel {
    id?: string;
    tenantId?: string;
    facilities: string;
    facilityCourt: string;
    date: string;
}

export class BookSloatFormModel extends BookSloatModel {

    isError: {
        id: string;
        tenantId: string;
        facilities: string;
        facilityCourt: string;
        date: string
    };
    filedName: {
        id: string;
        tenantId: string;
        facilities: string;
        facilityCourt: string;
        date: string;
    };

    constructor(){
        super()

        this.isError = {
            id: "",
            tenantId: "",
            facilities: "",
            facilityCourt: "",
            date:  ""
        }

        this.filedName = {
            id: "id",
            tenantId: "tenantId",
            facilities: "facilities",
            facilityCourt: "facilityCourt",
            date: "date",
        }
    }
}

export interface IBookSloatRequestModel {
    tenantId?: string;
    name: string;
    Fields: string;
    OrderBy: string;
    PageSize: number;
    Skip: number;
    SearchQuery: string;
  }

  export class BookSloatAppStore {
   
    update: {
      result: BookSloatModel | null | undefined;
      pending: boolean;
      error: any[];
    };
   
    constructor() {
      
      this.update = {
        result: null,
        pending: false,
        error: [],
      };
     
    }
  }
  
  //#endregion
  
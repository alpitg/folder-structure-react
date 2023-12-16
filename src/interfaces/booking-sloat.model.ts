export interface IBooking {
    facility: string;
    facilityCourt: string;
    shedular: IShedularStateModel[]
}

export interface IShedularStateModel {
    date: string;
    timeSlots: string[];
}

export interface IBookSloatModel {
    tenantId?: string;
    name: string;
    Fileds: string;
    OrderBy: string;
    PageSize: number;
    Skip: number;
    SearchQuery: string;
  }

export class BookingAppStore {
    bookSlot: IBooking;
    result: any;
    pending: boolean;
    error: any[];
    constructor() {
        this.bookSlot = {
            facility: "",
            facilityCourt: "",
            shedular: [],
        };
        this.result = null;
        this.pending = false;
        this.error = [];

    }
}
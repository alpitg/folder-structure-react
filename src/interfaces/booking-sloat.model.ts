export interface IBooking {
  // map(arg0: (m: any) => any): import("react").ReactNode;
  facility: string;
  facilityCourt: string;
  shedular: IShedularStateModel[]
}

export interface ISlotCost {
  cost: number;
  slot: string;
}

export interface IShedularStateModel {
  date: string;
  timeSlots: ISlotCost[];
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
  list: {
    result: IBooking[] | null | undefined;
    pending: boolean;
    error: any[];
  };
  update: {
    result: IBooking | null | undefined;
    pending: boolean;
    error: any[];
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
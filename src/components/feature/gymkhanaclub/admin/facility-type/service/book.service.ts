import { ENDPOINT } from "../../../../../../constants/global-contants/endpoint.const";
import { IBooking } from "../../../../../../interfaces/booking-sloat.model";
import { axiosInstance } from "../../../../../../utils/axios.util";

export default class BookSlotService {
    static fetchBookSlot = () => {
        return axiosInstance.get(
          ENDPOINT.API_BASE_URL + ENDPOINT.BOOKSLOTS.API.FETCH_BOOKSLOT
        );
      };

      static addBookSlot = (param: IBooking) => {
        return axiosInstance.post(
          ENDPOINT.API_BASE_URL + ENDPOINT.BOOKSLOTS.API.ADD_BOOKSLOT,
          param
        );
      };

      static updateBookSlot = (param: IBooking) => {
        return axiosInstance.put(
          ENDPOINT.API_BASE_URL + ENDPOINT.BOOKSLOTS.API.UPDATE_BOOKSLOT + "/" ,
          param
        );
      };
}
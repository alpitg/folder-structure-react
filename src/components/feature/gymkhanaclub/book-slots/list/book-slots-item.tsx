import { IBooking } from "../../../../../interfaces/booking-sloat.model"

const BookSlotsItem = (props: {bookSlot: IBooking}) => {

    return<>
        <div>
            <p>{props?.bookSlot?.facility}</p>
            <p>{props?.bookSlot?.facilityCourt}</p>
        </div>
    </>
}
 export default BookSlotsItem;
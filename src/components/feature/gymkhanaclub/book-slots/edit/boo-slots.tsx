import { Link } from "react-router-dom"
import HeaderInlineTextApp from "../../../../ui/header-inline-text/header-inline-text"
import { BOOK_SLOTS_SUB_TITLE, BOOK_SLOTS_TITLE } from "../book-slots.const"
import { ROUTE_URL } from "../../../../auth/constants/routes.const"
import { Button } from "primereact/button"

const BookSlots = () => {
    return<>
    <div className="col-sm-12">
                    <HeaderInlineTextApp
                        title={BOOK_SLOTS_TITLE}
                        subTitle={BOOK_SLOTS_SUB_TITLE}
                        children={
                            <>
                              {
                                    <Link to={`${ROUTE_URL.GYMKHANACLUB.FACILITY_BOOK_SLOTS}`}>
                                        <Button
                                            className=" float-end"
                                            label="Create new user"
                                            icon="pi pi-plus"
                                            size="small"
                                        />
                                    </Link>
                                }

                                <div>
                                    <p>Book table</p>
                                </div>
                            </>
                        }
                    />
                </div>
    </>
}

export default BookSlots
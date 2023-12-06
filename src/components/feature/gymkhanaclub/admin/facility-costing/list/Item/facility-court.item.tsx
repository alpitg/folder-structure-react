import { useDispatch } from "react-redux";
import { FacilityCourtModel } from "../../../../../../../interfaces/facility-court.model";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "../../../../../../auth/constants/routes.const";
import { deleteFacilityCourtRequest, resetDeleteFacilityCourt } from "../../../store/actions/facilityCourt.action";

const FacilityCourtItemApp = (props: { facilityCourt: FacilityCourtModel }) => {
    const dispatch = useDispatch();

    const deleteFacilityCourt = ( id: string = "" ) => {
      dispatch(deleteFacilityCourtRequest(id))
    }

   
    return(
        <>
        <tr key={props?.facilityCourt.id} className="user-list-item-app">
        <td>
          <span className="me-2" title="User role">
            {props?.facilityCourt.courtName}
          </span>
        </td>
        <td>
          <span className="me-2" title="User role">
            {props?.facilityCourt.courtNumber}
          </span>
        </td>
        <td>
          <span className="me-2" title="User role">
            {props?.facilityCourt.facilitiesId}
          </span>
        </td>
        <td>
          <span className="me-2" title="User role">
            {props?.facilityCourt.courtFees}
          </span>
        </td>

        <td>
        <Link to={`${ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_COSTING.BASE}/edit/${props?.facilityCourt?.id}`}>
              <span className="icon" title="Edit">
                <i className="pi pi-fw pi-pencil"></i>
              </span>
            </Link>
            <span
              className="icon cursor-pointer"
              title="Delete"
              onClick={() => deleteFacilityCourt(props?.facilityCourt?.id)}
            >
              <i className="pi grey pi-fw pi-times"></i>
            </span>
        </td>
        </tr>
        </>
    )
}


export default FacilityCourtItemApp;
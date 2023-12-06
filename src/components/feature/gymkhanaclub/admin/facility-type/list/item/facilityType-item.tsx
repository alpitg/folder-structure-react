import { useDispatch } from "react-redux";
import { FacilityTypeModel, IFacilityTypeModel } from "../../../../../../../interfaces/facilityType.model";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "../../../../../../auth/constants/routes.const";
import { deleteFacilityRequest } from "../../../store/actions/facility.action";
import { deleteFacilityTypeRequest } from "../../../store/actions/facilityType.action";

const FacilityItemApp = (props: { facilityType: FacilityTypeModel }) => {
  const dispatch = useDispatch();

  const deleteFacilityType = (id: string = "") => {
    dispatch(deleteFacilityTypeRequest(id))
  };

  return (
    <>
      <tr key={props?.facilityType.id} className="user-list-item-app">
        <td>
          <span className="me-2" title="User role">
            {props?.facilityType?.name}
          </span>

        </td>
        <td>
          <Link to={`${ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_TYPE.BASE}/edit/${props?.facilityType?.id}`}>
            <span className="icon" title="Edit">
              <i className="pi pi-fw pi-pencil"></i>
            </span>
          </Link>
          <span
            className="icon cursor-pointer"
            title="Delete"
            onClick={() => deleteFacilityType(props?.facilityType?.id)}
          >
            <i className="pi grey pi-fw pi-times"></i>
          </span>
        </td>

      </tr>
    </>
  )
}

export default FacilityItemApp;


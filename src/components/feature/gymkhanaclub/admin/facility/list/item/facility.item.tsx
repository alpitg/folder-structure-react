import { useDispatch } from "react-redux";
import { FacilityModel, IFacilityModel } from "../../../../../../../interfaces/facility.model";
import { deleteFacilityRequest } from "../../../store/actions/facility.action";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "../../../../../../auth/constants/routes.const";
import { Dropdown } from "primereact/dropdown";

const FacilitiesItemApp = (props: { facilities: FacilityModel }) => {
  const dispatch = useDispatch();

  const deleteFacility = (id: string = "") => {
    dispatch(deleteFacilityRequest(id));
  };

  return (
    <>
      <tr key={props?.facilities.id} className="user-list-item-app">
        <td>
          <span className="me-2" title="User role">
            {props?.facilities.name}
          </span>
        </td>
        <td>
          <span className="me-2" title="User role">
            {props?.facilities?.facilityTypeId}
          </span>
        </td>
        <td>
          <span
            className={
              "badge rounded-pill " +
              (props?.facilities?.isHavingMultipleCourts ? "bg-success" : "bg-light text-dark")
            }
          >
            IsHavingMultipleCourts
          </span>
        </td>
        <td>

          <td>
            <Link to={`${ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY.BASE}/edit/${props?.facilities?.id}`}>
              <span className="icon" title="Edit">
                <i className="pi pi-fw pi-pencil"></i>
              </span>
            </Link>
            <span
              className="icon cursor-pointer"
              title="Delete"
              onClick={() => deleteFacility(props?.facilities?.id)}
            >
              <i className="pi grey pi-fw pi-times"></i>
            </span>
          </td>
        </td>
      </tr>
    </>
  )
}

export default FacilitiesItemApp;
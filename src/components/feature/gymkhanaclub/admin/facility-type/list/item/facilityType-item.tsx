import { useDispatch } from "react-redux";
import { FacilityTypeModel } from "../../../../../../../interfaces/facilityType.model";

const FacilityItemApp = (props: {facilityType: FacilityTypeModel}) => {
    const dispatch = useDispatch();


    return(
        <>
           <tr key={props?.facilityType.id} className="user-list-item-app">
           <td>
        <div className="user-list-job-starred">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="feather feather-star starred"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </a>
        </div>
      </td>
      <td>
        <div className="avatar">
          <img
            alt="..."
            className="img-circle img-no-padding img-responsive"
            src="/static/media/img/faces/ayo-ogunseinde-2.jpg"
          />
        </div>
      </td>
        <td>
          <span className="me-2" title="User role">
            {props?.facilityType?.firstName}
          </span>
          {/* {props?.facilityType?.isDefault && (
            <span className={"badge rounded-pill bg-success"}>Default</span>
          )} */}
        </td>
        </tr>
        </>
    )
}

export default FacilityItemApp;


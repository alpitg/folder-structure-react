import { useDispatch } from "react-redux";
import { IFacilityTypeModel } from "../../../../../../../interfaces/facilityType.model";

const FacilityItemApp = (props: {facilityType: IFacilityTypeModel}) => {
    const dispatch = useDispatch();


    return(
        <>
           <tr key={props?.facilityType.id} className="user-list-item-app">
        <td>
          <span className="me-2" title="User role">
            {props?.facilityType?.name}
          </span>
          {props?.facilityType?.isDefault && (
            <span className={"badge rounded-pill bg-success"}>Default</span>
          )}
        </td>
        </tr>
        </>
    )
}

export default FacilityItemApp;


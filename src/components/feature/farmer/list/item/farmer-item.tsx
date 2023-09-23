import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IRoleModel } from "../../../../../interfaces/role.model";
import { ROUTE_URL } from "../../../../auth/constants/routes.const";
import "./farmer-item.scss";

const FarmerItemApp = (props: { item: any, refreshList:any }) => {
    const dispatch = useDispatch();

    const deleteRole = (id: string) => {
        // dispatch(deleteRoleRequest(id));
    };

    function deleteFarmer(id: any) {
        fetch(`http://localhost:8080/api/deleteFarmerById/${id}`, {
          method: "DELETE",
        })
            .then((result) => {
                // getAllFarmers();
                props.refreshList();

            });
        
      }
    

    return (
        <>
            <div className="row pb-3">
                <div className="col-2 col-md-2">
                    <div className="avatar">
                        <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src="/static/media/img/faces/ayo-ogunseinde-2.jpg"
                        />
                    </div>
                </div>
                <div className="col-7 col-md-7">
                    {props?.item.id}
                    <br />
                    firstName: {props?.item.firstName}
                    <br />
                    middleName: {props?.item.middleName}
                    <br />
                    lastName: {props?.item.lastName}
                    <br />
                    mobileNo: {props?.item.mobileNo}
                    <br />
                    emailId: {props?.item.emailId}
                    <br />
                    address1: {props?.item.address1}
                    <br />
                    address2: {props?.item.address2}
                    <br />
                    city: {props?.item.city}
                    <br />
                    village: {props?.item.village}
                    <br />
                    taluka: {props?.item.taluka}
                    <br />
                    {/* state: {props?.item.state}
                    <br /> */}
                    <span className="text-muted">
                        <small>Offline</small>
                    </span>
                    <span className="text-success">
                        <small> | Available</small>
                    </span>
                    <span className="text-danger">
                        <small> | Busy</small>
                    </span>
                </div>
                <div className="col-3 col-md-3">
                    <>
                        <Link to={`${ROUTE_URL.FARMERS}/edit/${props?.item?.id}`}>
                            <span className="icon" title="Edit">
                                <i className="pi pi-fw pi-pencil"></i>
                            </span>
                        </Link>


                        <span
                            className="icon"
                            title="Delete"
                            onClick={() => deleteFarmer(props?.item.id)}
                        >
                            <i className="pi pi-fw pi-times"></i>
                        </span>
                    </>
                </div>
            </div>
        </>
    );
};

export default FarmerItemApp;
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IRoleModel } from "../../../../../interfaces/role.model";
import { ROUTE_URL } from "../../../../auth/constants/routes.const";
import "./expenditure-item.scss";

const ExpenditureItemApp = (props: { item: any, refreshList: any }) => {
    const dispatch = useDispatch();

    const deleteRole = (id: string) => {
        // dispatch(deleteRoleRequest(id));
    };

    function deleteExpenditureDetails(id: any) {
        fetch(`http://localhost:8080/api/deleteExpenditureDetailsById/${id}`, {
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU'

            }
        }).then((result) => {
            // getAllCultivationDetails();
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
                    operationDate: {props?.item.operationDate}
                    <br />
                    totalManpower: {props?.item.totalManpower}
                    <br />
                    charges:  {props?.item.charges}
                    <br />
                    totalCharges:  {props?.item.totalCharges}
                    <br />
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
                        <Link to={`${ROUTE_URL.EXPENDITURE}/edit/${props?.item?.id}`}>
                            <span className="icon" title="Edit">
                                <i className="pi pi-fw pi-pencil"></i>
                            </span>
                        </Link>


                        <span
                            className="icon"
                            title="Delete"
                            onClick={() => deleteExpenditureDetails(props?.item.id)}
                        >
                            <i className="pi pi-fw pi-times"></i>
                        </span>
                    </>
                </div>
            </div>
        </>
    );
};

export default ExpenditureItemApp;
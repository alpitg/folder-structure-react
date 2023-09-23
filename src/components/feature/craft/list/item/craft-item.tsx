import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IRoleModel } from "../../../../../interfaces/role.model";
import { ROUTE_URL } from "../../../../auth/constants/routes.const";
import "./craft-item.scss";

const CraftItemApp = (props: { item: any, refreshList: any }) => {
    const dispatch = useDispatch();

    const deleteRole = (id: string) => {
        // dispatch(deleteRoleRequest(id));
    };

    function deleteCraft(id:any) {
        fetch(`http://localhost:8080/api/deleteCraftById/${id}`, {
          method: 'DELETE'
        }).then((result) => {
        //   result.json().then((resp) => {
        //     getCraftDetaildById()
        //   });
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
                    craftName: {props?.item.craftName}
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
                        <Link to={`${ROUTE_URL.CRAFT}/edit/${props?.item?.id}`}>
                            <span className="icon" title="Edit">
                                <i className="pi pi-fw pi-pencil"></i>
                            </span>
                        </Link>


                        <span
                            className="icon"
                            title="Delete"
                            onClick={() => deleteCraft(props?.item.id)}
                        >
                            <i className="pi pi-fw pi-times"></i>
                        </span>
                    </>
                </div>
            </div>
        </>
    );
};

export default CraftItemApp;
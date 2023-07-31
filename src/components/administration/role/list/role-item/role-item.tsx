import { IRoleModel } from "../../../../../interfaces/role.model";
import "./role-item.scss";

const RoleItemApp = (props: { role: IRoleModel; children: any }) => {
  return (
    <>
      <div className="row">
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
          {props.role.name} <br />
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
          {props.children}
          {/* <button className="btn-round btn-icon btn btn-outline-success btn-sm">
            <i className="fa fa-envelope"></i>
          </button> */}
        </div>
      </div>
    </>
  );
};

export default RoleItemApp;

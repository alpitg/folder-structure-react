import { Link } from "react-router-dom";
import { ITenantModel } from "../../../../../interfaces/tenant.model";
import { ROUTE_URL } from "../../../../auth/constants/routes.const";
import { useDispatch } from "react-redux";
import { deleteTenantRequest } from "../../../store/actions/tenant.action";
import "./tenant-list-item.scss";

const TenantListItemApp = (props: { tenant: ITenantModel }) => {
  const dispatch = useDispatch();

  const deleteTenant = (id: string) => {
    dispatch(deleteTenantRequest(id));
  };

  return (
    <tr key={props?.tenant.id} className="tenant-list-item-app">
      <td>
        <div className="tenant-list-job-title">
          <span title={"Tenant name: " + props?.tenant.name}>
            {props?.tenant.name}
          </span>
          <span className="text-muted"> - {props?.tenant.displayName}</span>
        </div>
      </td>
      <td>
        <span
          className={
            "badge rounded-pill " +
            (props?.tenant.isActive ? "bg-success" : "bg-light text-dark")
          }
        >
          Active
        </span>
      </td>

      <td>
        <div className="d-flex">
          <Link to={`${ROUTE_URL.ADMIN.TENANT.BASE}/edit/${props?.tenant?.id}`}>
            <span className="icon" title="Edit">
              <i className="pi pi-fw pi-pencil"></i>
            </span>
          </Link>
          <span
            className="icon cursor-pointer"
            title="Delete"
            onClick={() => deleteTenant(props?.tenant?.id)}
          >
            <i className="pi pi-fw pi-times"></i>
          </span>
        </div>
      </td>
    </tr>
  );
};

export default TenantListItemApp;

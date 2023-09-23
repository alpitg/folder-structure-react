import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { AppState } from "../../../../store/reducers/root.reducer";
import { IRoleModel } from "../../../../interfaces/role.model";
import { ROUTE_URL } from "../../../auth/constants/routes.const";

const RoleDetailApp = () => {
  const { id } = useParams();
  const roles = useSelector((x: AppState) => x.administration.roles);
  const [roleDetail, setRoleDetaiil] = useState<IRoleModel>();

  useEffect(() => {
    const temp = roles.list.result?.find((x) => x.id === id);
    setRoleDetaiil(temp);
  }, [id]);

  return (
    <>
      <Card
        title={
          <>
            <Link to={`${ROUTE_URL.ADMIN.ROLE.BASE}`}>
              <span className="icon" title="Navigate Back">
                <i className="pi pi-fw pi-arrow-left"></i>
              </span>
            </Link>
            <span className="p-2">Role Detail</span>
          </>
        }
      >
        Hi From RoleDetailApp {roleDetail?.name}
      </Card>
    </>
  );
};

export default RoleDetailApp;

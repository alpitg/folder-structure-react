import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { AppState } from "../../../../store/reducers/root.reducer";
import { UserModel } from "../../../../interfaces/user.model";
import { ROUTE_URL } from "../../../auth/constants/routes.const";

const UserDetailApp = () => {
  const { id } = useParams();
  const users = useSelector((x: AppState) => x.administration.users);
  const [userDetail, setUserDetaiil] = useState<UserModel>();

  useEffect(() => {
    const temp = users.list?.result?.find((x) => x.id === id);
    setUserDetaiil(temp);
  }, [id]);

  return (
    <>
      <Card
        title={
          <>
            <Link to={`${ROUTE_URL.ADMIN.USER.BASE}`}>
              <span className="icon" title="Navigate Back">
                <i className="pi pi-fw pi-arrow-left"></i>
              </span>
            </Link>
            <span className="p-2">Edit User</span>
          </>
        }
      >
        Hi From UserDetailApp {userDetail?.userName}
      </Card>
    </>
  );
};

export default UserDetailApp;

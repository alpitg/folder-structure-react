import "./orm-navbar.scss";
import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { useNavigate } from "react-router";
import AuthService from "../../../../../services/auth.service";
import { logoutUserRequest } from "../../../../../store/actions/auth.action";
import { ROUTE_URL } from "../../../../auth/constants/routes.const";

const OrmNavbarApp = ({ isOpenSideBar }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logoutUserRequest(AuthService.getAuthDetail()?.email));
    navigate(ROUTE_URL.LOGIN);
  };

  return (
    <>
      <div className="navbar-app">
        <nav
          className={"navbar-content " + (isOpenSideBar ? "margin-left" : "")}
        >
          <div className="nav-left">
            <span>Home</span>
            <span> Dashboard</span>
            <span> Reports</span>
          </div>
          <div className="nav-right">

            <Button
              icon="pi pi-bell"
              text
              title="Notifications"
              severity="secondary"
              aria-label="notification"
            />
            <Button
              icon="pi pi-sign-out"
              text
              title="Logout"
              severity="secondary"
              aria-label="logout"
              onClick={onLogoutClick}
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default OrmNavbarApp;

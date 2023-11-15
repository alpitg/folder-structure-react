import { Button } from "primereact/button";
import AuthService from "../../../services/auth.service";
import { useNavigate } from "react-router";
import { ROUTE_URL } from "../../auth/constants/routes.const";
import { useDispatch } from "react-redux";
import { logoutUserRequest } from "../../../store/actions/auth.action";
import "./navbar.scss";
import AppTheme from "../../../app-theme";

const NavbarApp = ({ isOpenSideBar }: any) => {
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
          <div className="nav-left"> Techno </div>
          <div className="nav-right">
            <AppTheme />
            <Button
              icon="pi pi-comment"
              text
              title="Comments"
              severity="secondary"
              aria-label="comment"
            />
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

            {/* <i className="pi pi-bell p-overlay-badge">
            <Badge value="2"></Badge>
          </i>
          <i className="pi pi-envelope p-overlay-badge">
            <Badge severity="danger"></Badge>
          </i> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarApp;

import "./orm-navbar.scss";
import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { useNavigate } from "react-router";
import AuthService from "../../../../../services/auth.service";
import { logoutUserRequest } from "../../../../../store/actions/auth.action";
import { ROUTE_URL } from "../../../../auth/constants/routes.const";
import { NavLink } from "react-router-dom";

const OrmNavbarApp = ({ isOpenSideBar }: any) => {

  const routes = [
    {
      label: "Home",
      path: ROUTE_URL.ORM.HOME,
      icon: "pi pi-fw pi-home",
      claims: [],
    },
    {
      label: "Dashboard",
      path: ROUTE_URL.ORM.DASHBOARD,
      icon: "pi pi-fw pi-ticket",
      claims: [],
    },
    {
      label: "Reports",
      path: ROUTE_URL.ORM.REPORTS.BASE,
      icon: "pi pi-fw pi-ticket",
      claims: [],
    },
    {
      label: "Social Listening",
      path: ROUTE_URL.ORM.SOCIAL_LISTENING.BASE,
      icon: "pi pi-fw pi-ticket",
      claims: [],
    },
    {
      label: "Survey",
      path: ROUTE_URL.ORM.SURVEY.BASE,
      icon: "pi pi-fw pi-ticket",
      claims: [],
    },
    {
      label: "Settings",
      path: ROUTE_URL.ORM.SETTINGS,
      icon: "pi pi-fw pi-ticket",
      claims: [],
    },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logoutUserRequest(AuthService.getAuthDetail()?.email));
    navigate(ROUTE_URL.LOGIN);
  };

  return (
    <>
      <div className="orm-navbar-app">
        <nav
          className={"navbar-content " + (isOpenSideBar ? "margin-left" : "")}
        >
          <div className="nav-left">
            {
              routes?.map(item => {
                return <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? "active" : "inactive")}
                >
                  {item.label}
                </NavLink>
              })
            }

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

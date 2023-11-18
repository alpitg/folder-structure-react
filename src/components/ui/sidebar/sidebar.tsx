import { IRoutes } from "../../../interfaces/routes.model";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTE_URL } from "../../auth/constants/routes.const";
import { hasClaim } from "../../../utils/auth.util";
import {
  DB_STATISTICS,
  TENANTS_VIEW_TENANTS,
  TENANTS_ADD_TENANTS,
  TENANTS_UPDATE_TENANTS,
  TENANTS_DELETE_TENANTS,
  ROLES_VIEW_ROLES,
  ROLES_ADD_ROLE,
  ROLES_UPDATE_ROLE,
  ROLES_DELETE_ROLE,
  USR_ADD_USER,
  USR_DELETE_USER,
  USR_UPDATE_USER,
  USR_VIEW_USERS,
  USR_ASSIGN_USR_PERMISSIONS,
  USR_ONLINE_USERS,
} from "../../../constants/global-contants/claims.const";
import "./sidebar.scss";

const SidebarApp = () => {
  const location = useLocation();

  const routes: IRoutes[] = [
    {
      label: "Dashboard",
      path: ROUTE_URL.DASHBOARD,
      icon: "pi pi-fw pi-chart-line",
      claims: [DB_STATISTICS],
    },
    {
      label: "Administration",
      path: ROUTE_URL.ADMIN.BASE,
      icon: "pi pi-fw pi-sliders-h",
      claims: [],
      route: [
        {
          label: "Organization Units",
          path: ROUTE_URL.ADMIN.ORGANIZATION_UNITS.BASE,
          icon: "pi pi-fw pi-th-large",
          claims: [],
        },
        {
          label: "Tenant",
          path: ROUTE_URL.ADMIN.TENANT.BASE,
          icon: "pi pi-fw pi-sitemap",
          claims: [
            TENANTS_VIEW_TENANTS,
            TENANTS_ADD_TENANTS,
            TENANTS_UPDATE_TENANTS,
            TENANTS_DELETE_TENANTS,
          ],
        },
        {
          label: "Roles",
          path: ROUTE_URL.ADMIN.ROLE.BASE,
          icon: "pi pi-fw pi-briefcase",
          claims: [
            ROLES_VIEW_ROLES,
            ROLES_ADD_ROLE,
            ROLES_UPDATE_ROLE,
            ROLES_DELETE_ROLE,
          ],
        },
        {
          label: "Users",
          path: ROUTE_URL.ADMIN.USER.BASE,
          icon: "pi pi-fw pi-users",
          claims: [
            USR_ADD_USER,
            USR_DELETE_USER,
            USR_UPDATE_USER,
            USR_VIEW_USERS,
            USR_ASSIGN_USR_PERMISSIONS,
            USR_ONLINE_USERS,
          ],
        },
        // {
        //   label: "Subscription",
        //   path: ROUTE_URL.ADMIN.SUBSCRIPTION_MANAGEMENT,
        //   icon: "pi pi-fw pi-sync",
        //   claims: [],
        // },
      ],
    },
    {
      label: "Pages",
      path: "",
      icon: "pi pi-fw pi-users",
      claims: [],
      route: [

        {
          label: "About",
          path: ROUTE_URL.ABOUT,
          icon: "pi pi-fw pi-file",
          claims: [],
        },
        {
          label: "Contact",
          path: ROUTE_URL.CONTACT,
          icon: "pi pi-fw pi-comments",
          claims: [],
        },
        {
          label: "Login",
          path: ROUTE_URL.LOGIN,
          claims: [],
          icon: "pi pi-fw pi-sign-in",
        },
        {
          label: "Register",
          path: ROUTE_URL.REGISTER,
          claims: [],
          icon: "pi pi-fw pi-sign-in",
        },
        {
          label: "Social Media",
          path: ROUTE_URL.SOCIAL_MEDIA_MANAGEMENT,
          claims: [],
          icon: "pi pi-fw pi-verified",
        },
        {
          label: "UI",
          path: ROUTE_URL.UI,
          icon: "pi pi-fw pi-bolt",
          claims: [],
        },
      ]
    },
    {
      label: "Gymkhana",
      path: ROUTE_URL.HOME,
      icon: "pi pi-fw pi-chart-line",
      claims: [],
      route: [
        {
          label: "Facility Type",
          path: ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_TYPE.BASE,
          icon: "pi pi-fw pi-ticket",
          claims: [],
        },
        {
          label: "Facility Sports",
          path: ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY.BASE,
          icon: "pi pi-fw pi-tablet",
          claims: [],
        },
        {
          label: "Facility Costing",
          path: ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_COSTING.BASE,
          icon: "pi pi-fw pi-tag",
          claims: [],
        },
        {
          label: "Book Slots",
          path: ROUTE_URL.GYMKHANACLUB.FACILITY_BOOK_SLOTS.BASE,
          icon: "pi pi-fw pi-id-card",
          claims: [],
        },
        {
          label: "Signup",
          path: ROUTE_URL.GYMKHANACLUB.SIGNUP,
          icon: "pi pi-fw pi-bolt",
          claims: [],
        },
      ]
    },
    {
      label: "Ticketing tool",
      path: ROUTE_URL.TICKETING_TOOL.BASE,
      icon: "pi pi-fw pi-chart-line",
      claims: [],
      route: [
        {
          label: "Social Login",
          path: ROUTE_URL.TICKETING_TOOL.SOCIAL_LOGINS,
          icon: "pi pi-fw pi-ticket",
          claims: [],
        },
      ]
    },
    {
      label: "Settings",
      path: ROUTE_URL.TENANT_SETTINGS,
      icon: "pi pi-fw pi-cog",
      claims: [],
    },
  ];

  const isActivePath = (routes: IRoutes[]) => {
    if (location?.pathname?.split("/")[1]) {
      return routes.some((x) =>
        x?.path?.includes(location?.pathname?.split("/")[1])
      );
    } else {
      return false;
    }
  };

  const SideBarNav = ({ route }: { route: IRoutes }) => {
    return hasClaim(route?.claims) ? (
      <NavLink
        to={route.path}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <span className="icon">
          <i className={route.icon}></i>
        </span>
        {route.label}
      </NavLink>
    ) : null;
  };

  return (
    <div className="sidebar-app">
      <div className="logo-section">
        <span className="company-icon">
          <img
            src="/static/media/img/technossplash-logo-1.png"
            alt="company-logo"
          />
        </span>
      </div>
      <ul>
        {routes.map((route: IRoutes) => {
          return route.route ? (
            <li key={route.label}>
              <div className="accordion" id={route.label?.replaceAll(" ", "")}>
                <div className="accordion-item">
                  <button
                    className={
                      isActivePath(route.route)
                        ? "accordion-button active"
                        : "accordion-button collapsed"
                    }
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#" + route.label?.replaceAll(" ", "") + "collapse"}
                    aria-expanded="false"
                    aria-controls={route.label?.replaceAll(" ", "") + "collapse"}
                  >
                    <span className="icon">
                      <i className={route.icon}></i>
                    </span>
                    {route.label}
                  </button>
                  <div
                    id={route.label?.replaceAll(" ", "") + "collapse"}
                    className={
                      isActivePath(route.route)
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    aria-labelledby={route.label?.replaceAll(" ", "")}
                    data-bs-parent={"#" + route.label?.replaceAll(" ", "")}
                  >
                    {route.route.map((child) => {
                      return <SideBarNav route={child} key={child.label} />;
                    })}
                  </div>
                </div>
              </div>
            </li>
          ) : (
            <li key={route.label}>
              <SideBarNav route={route} />
            </li>
          );
        })}
      </ul>

      <div className="sidebar-bottom">
        <p>Made with ❤</p>
      </div>
    </div>
  );
};

export default SidebarApp;

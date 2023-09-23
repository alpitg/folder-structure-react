import { IRoutes } from "../../../interfaces/routes.model";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTE_URL } from "../../auth/constants/routes.const";
import "./sidebar.scss";

const SidebarApp = () => {
  const location = useLocation();

  const routes: IRoutes[] = [
    {
      label: "Dashboard",
      path: ROUTE_URL.DASHBOARD,
      icon: "pi pi-fw pi-chart-line",
    },
    {
      label: "Administration",
      path: ROUTE_URL.ADMIN.BASE,
      icon: "pi pi-fw pi-sliders-h",
      route: [
        {
          label: "Organization Units",
          path: ROUTE_URL.ADMIN.ORGANIZATION_UNITS,
          icon: "pi pi-fw pi-th-large",
        },
        {
          label: "Tenant",
          path: ROUTE_URL.ADMIN.TENANT.BASE,
          icon: "pi pi-fw pi-sitemap",
        },
        {
          label: "Roles",
          path: ROUTE_URL.ADMIN.ROLE.BASE,
          icon: "pi pi-fw pi-briefcase",
        },
        {
          label: "Users",
          path: ROUTE_URL.ADMIN.USER.BASE,
          icon: "pi pi-fw pi-users",
        },
        {
          label: "Subscription",
          path: ROUTE_URL.ADMIN.SUBSCRIPTION_MANAGEMENT,
          icon: "pi pi-fw pi-sync",
        },
      ],
    },
    {
      label: "Cultivation",
      path: ROUTE_URL.CULTIVATION,
      icon: "pi pi-fw pi-chart-line",
    },
    {
      label: "Expenditure",
      path: ROUTE_URL.EXPENDITURE,
      icon: "pi pi-fw pi-chart-line",
    },
    {
      label: "Farmer",
      path: ROUTE_URL.FARMERS,
      icon: "pi pi-fw pi-chart-line",
    },
    {
      label: "Craft",
      path: ROUTE_URL.CRAFT,
      icon: "pi pi-fw pi-chart-line",
    },
    {
      label: "Category",
      path: ROUTE_URL.CATEGORY,
      icon: "pi pi-fw pi-chart-line",
    },
    {
      label: "About",
      path: ROUTE_URL.ABOUT,
      icon: "pi pi-fw pi-file",
    },
    {
      label: "Contact",
      path: ROUTE_URL.CONTACT,
      icon: "pi pi-fw pi-comments",
    },
    {
      label: "Login",
      path: ROUTE_URL.LOGIN,
      icon: "pi pi-fw pi-sign-in",
    },
    {
      label: "Social Media",
      path: ROUTE_URL.SOCIAL_MEDIA_MANAGEMENT,
      icon: "pi pi-fw pi-verified",
    },
    {
      label: "UI",
      path: ROUTE_URL.UI,
      icon: "pi pi-fw pi-bolt",
    },
  ];

  const isActivePath = (routes: IRoutes[]) => {
    return routes.some((x) =>
      x?.path?.includes(location?.pathname?.split("/")[1])
    );
  };

  const SideBarNav = ({ route }: { route: IRoutes }) => {
    return (
      <NavLink
        to={route.path}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <span className="icon">
          <i className={route.icon}></i>
        </span>
        {route.label}
      </NavLink>
    );
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
              <div className="accordion" id={route.label}>
                <div className="accordion-item">
                  <button
                    className={
                      isActivePath(route.route)
                        ? "accordion-button active"
                        : "accordion-button collapsed"
                    }
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#" + route.label + "collapse"}
                    aria-expanded="false"
                    aria-controls={route.label + "collapse"}
                  >
                    <span className="icon">
                      <i className={route.icon}></i>
                    </span>
                    {route.label}
                  </button>
                  <div
                    id={route.label + "collapse"}
                    className={
                      isActivePath(route.route)
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    aria-labelledby={route.label}
                    data-bs-parent={"#" + route.label}
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

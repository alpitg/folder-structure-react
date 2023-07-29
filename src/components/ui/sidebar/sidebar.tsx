
import { useState } from 'react';
import { IRoutes } from '../../../interfaces/routes.model';
import { NavLink } from 'react-router-dom';

import './sidebar.scss';
import { ROUTE_URL } from '../../auth/constants/routes.const';

const SidebarApp = () => {
    const [isOpenSideBar, setIsOpenSidebar] = useState<boolean>(true);

    const routes: IRoutes[] = [
        {
            label: "Dashboard",
            path: ROUTE_URL.DASHBOARD,
            icon: "pi pi-fw pi-chart-line",
        },
        {
            label: "Administration",
            path: ROUTE_URL.ADMIN,
            icon: "pi pi-fw pi-sliders-h",
            route: [
                {
                    label: "Organization Units",
                    path: ROUTE_URL.ORGANIZATION_UNITS,
                    icon: "pi pi-fw pi-th-large",
                },
                {
                    label: "Roles",
                    path: ROUTE_URL.ROLES,
                    icon: "pi pi-fw pi-briefcase",
                },
                {
                    label: "Users",
                    path: ROUTE_URL.USERS,
                    icon: "pi pi-fw pi-users",
                }
            ]
        },
        {
            label: "About",
            path: ROUTE_URL.ABOUT,
            icon: "pi pi-fw pi-file"
        },
        {
            label: "Contact",
            path: ROUTE_URL.CONTACT,
            icon: "pi pi-fw pi-comments"
        },
        {
            label: "Login",
            path: ROUTE_URL.LOGIN,
            icon: "pi pi-fw pi-sign-in"
        },
    ];

    const toggleSideBar = () => {
        setIsOpenSidebar(!isOpenSideBar);
    }

    const SideBarNav = ({ route }: { route: IRoutes }) => {
        return <NavLink to={route.path} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <span className="icon"><i className={route.icon}></i></span>
            {route.label}
        </NavLink>;
    }

    return (
        <div className="sidebar-app">
            <div className="logo-section">
                <span className="icon"><i className="pi pi-fw pi-angle-double-right"></i></span>
            </div>
            <ul>
                {
                    routes.map((route: IRoutes) => {
                        return (route.route ?
                            <li key={route.label}>
                                <div className="accordion" id={route.label}>
                                    <div className="accordion-item">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + route.label + "collapse"} aria-expanded="false" aria-controls={route.label + "collapse"} >
                                            <span className="icon"><i className={route.icon}></i></span>
                                            {route.label}
                                        </button>
                                        <div id={route.label + "collapse"} className="accordion-collapse collapse" aria-labelledby={route.label} data-bs-parent={"#" + route.label}>
                                            {
                                                route.route.map(child => {
                                                    return <SideBarNav route={child} key={child.label} />
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </li>
                            :
                            <li key={route.label} >
                                <SideBarNav route={route} />
                            </li>
                        )
                    })
                }
            </ul>
        </div >
    );
}

export default SidebarApp;


import { useState } from 'react';
import { IRoutes } from '../../../interfaces/routes.model';
import { Link, NavLink } from 'react-router-dom';

import './sidebar.scss';
import { ROUTE_URL } from '../../auth/constants/routes.const';

const SidebarApp = () => {
    const [isOpenSideBar, setIsOpenSidebar] = useState<boolean>(true);

    const routes: IRoutes[] = [
        {
            label: "Dashboard",
            path: ROUTE_URL.DASHBOARD,
            icon: "pi pi-fw pi-file",
        },
        {
            label: "Administration",
            path: ROUTE_URL.ADMIN,
            icon: "pi pi-fw pi-file",
            route: [
                {
                    label: "Roles",
                    path: ROUTE_URL.Roles,
                    icon: "pi pi-fw pi-file",
                },
                {
                    label: "Users",
                    path: ROUTE_URL.Users,
                    icon: "pi pi-fw pi-file",
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
            icon: "pi pi-fw pi-pencil"
        },
        {
            label: "Login",
            path: ROUTE_URL.LOGIN,
            icon: "pi pi-fw pi-pencil"
        },
    ];

    const toggleSideBar = () => {
        setIsOpenSidebar(!isOpenSideBar);
    }

    return (
        <div className="sidebar-app">
            <ul>
                {
                    routes.map((route: IRoutes) => {
                        return (route.route ?
                            <li key={route.label}>
                                <div className="accordion" id={route.label}>
                                    <div className="accordion-item">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + route.label + "collapse"} aria-expanded="false" aria-controls={route.label + "collapse"} >
                                            {route.label}
                                        </button>
                                        <div id={route.label + "collapse"} className="accordion-collapse collapse" aria-labelledby={route.label} data-bs-parent={"#" + route.label}>
                                            {
                                                route.route.map(child => {
                                                    return <li key={child.label} >
                                                        <NavLink to={child.path} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{child.label}</NavLink>
                                                    </li>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </li>
                            :
                            <li key={route.label} >
                                <NavLink to={route.path} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{route.label}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div >
    );
}

export default SidebarApp;

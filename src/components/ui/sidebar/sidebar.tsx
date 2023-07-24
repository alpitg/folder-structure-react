
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
            icon: "pi pi-fw pi-file"
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
                        return (
                            <li key={route.label}>
                                {/* <Link to={route.path}> {route.label} </Link> */}
                                <NavLink to={route.path} className={({ isActive }) =>
                                    (isActive ? 'active' : 'inactive')}>{route.label}</NavLink>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default SidebarApp;

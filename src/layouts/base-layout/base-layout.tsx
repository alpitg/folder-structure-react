
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Outlet } from 'react-router';
import SidebarApp from '../../components/ui/sidebar/sidebar';
import NavbarApp from '../../components/ui/navbar/navbar';
import AuthApp from '../../components/auth/auth';
import { Suspense } from 'react';

const BaseLayoutApp = () => {
    const [isOpenSideBar, setIsOpenSidebar] = useState<boolean>(false);

    return (
        <AuthApp>
            <div className="base-layout-app">

                <div className="layout-sidebar">
                    <div className="toggle-sidebar">
                        <SidebarApp />
                    </div>
                    <Sidebar className="toggle-sidebar-overlay" visible={isOpenSideBar} onHide={() => setIsOpenSidebar(false)}>
                        <SidebarApp />
                    </Sidebar>
                </div>
                <div className="main-content">
                    <Button className="toggle-sidebar-overlay" icon="pi pi-arrow-right" onClick={() => setIsOpenSidebar(true)} />
                    <NavbarApp />
                    <div>

                        <Suspense fallback={<div>Loading...</div>}><Outlet />
                        </Suspense>
                    </div>

                </div>

            </div >

        </AuthApp>
    );
}

export default BaseLayoutApp;

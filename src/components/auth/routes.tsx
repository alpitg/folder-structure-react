import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayoutApp from '../../layouts/base-layout/base-layout';
import { ROUTE_URL } from './constants/routes.const';

const Dashboard = lazy(() => import('../../pages/dashboard/dashboard'));
const Contact = lazy(() => import("../../pages/contact/contact"));
const About = lazy(() => import("../../pages/about/about"));
const Login = lazy(() => import("../../components/auth/login/login"));
const Register = lazy(() => import("../../components/auth/register/register"));
const OrganizationUnits = lazy(() => import("../administration/organization-units/organization-units"));
const Roles = lazy(() => import("../../components/administration/roles/roles"));
const Users = lazy(() => import("../../components/administration/users/users"));
const UI = lazy(() => import("../../pages/ui/ui"));

const RoutesApp = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTE_URL.HOME} element={<BaseLayoutApp />}>
                        <Route path={ROUTE_URL.DASHBOARD} element={<Dashboard />} />
                        <Route path={ROUTE_URL.ORGANIZATION_UNITS} element={<OrganizationUnits />} />
                        <Route path={ROUTE_URL.Roles} element={<Roles />} />
                        <Route path={ROUTE_URL.Users} element={<Users />} />
                        <Route path={ROUTE_URL.ABOUT} element={<About />} />
                        <Route path={ROUTE_URL.CONTACT} element={<Contact />} />
                    </Route>
                    <Route path={ROUTE_URL.LOGIN} element={<Login />} />
                    <Route path={ROUTE_URL.REGISTER} element={<Register />} />
                    <Route path={ROUTE_URL.UI} element={<UI />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default RoutesApp;
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayoutApp from '../../layouts/base-layout/base-layout';
import { ROUTE_URL } from './constants/routes.const';

const Dashboard = lazy(() => import('../../pages/dashboard/dashboard'));
const Contact = lazy(() => import("../../pages/contact/contact"));
const About = lazy(() => import("../../pages/about/about"));
const Login = lazy(() => import("../../components/auth/login/login"));
const Register = lazy(() => import("../../components/auth/register/register"));

const RoutesApp = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTE_URL.HOME} element={<BaseLayoutApp />}>
                        <Route path={ROUTE_URL.DASHBOARD} element={<Dashboard />} />
                        <Route path={ROUTE_URL.ABOUT} element={<About />} />
                        <Route path={ROUTE_URL.CONTACT} element={<Contact />} />
                    </Route>
                    <Route path={ROUTE_URL.LOGIN} element={<Login />} />
                    <Route path={ROUTE_URL.REGISTER} element={<Register />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default RoutesApp;
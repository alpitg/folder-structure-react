import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayoutApp from "../../layouts/base-layout/base-layout";
import { ROUTE_URL } from "./constants/routes.const";

const Dashboard = lazy(() => import("../../pages/dashboard/dashboard"));
const Contact = lazy(() => import("../../pages/contact/contact"));
const About = lazy(() => import("../../pages/about/about"));
const Login = lazy(() => import("../../components/auth/login/login"));
const Register = lazy(() => import("../../components/auth/register/register"));
const OrganizationUnits = lazy(() => import("../administration/organization-units/organization-units"));
const Subscription = lazy(() => import("../administration/subscription/subscription"));
const Tenant = lazy(() => import("../administration/tenant/tenant"));
const TenantList = lazy(() => import("../administration/tenant/list/tenant-list"));
const TenantEdit = lazy(() => import("../administration/tenant/edit/tenant-edit"));
const Role = lazy(() => import("../administration/role/role"));
const RoleList = lazy(() => import("../../components/administration/role/list/role-list"));
const RoleDetail = lazy(() => import("../administration/role/detail/role-detail"));
const RoleDetailEdit = lazy(() => import("../../components/administration/role/edit/role-edit"));
const User = lazy(() => import("../administration/user/user"));
const UserList = lazy(() => import("../../components/administration/user/list/user-list"));
const UserDetail = lazy(() => import("../../components/administration/user/detail/user-detail"));
const UserDetailEdit = lazy(() => import("../../components/administration/user/edit/user-edit"));
const UserPermissions = lazy(() => import("../../components/administration/user/permissions/user-permissions"));
const Cultivation = lazy(() => import("../../components/feature/cultivation/cultivation"));
const CreateCultivationDetails= lazy(() => import("../../components/feature/cultivation/create/cultivation-create"));
const EditCultivation= lazy(() => import("../../components/feature/cultivation/edit/cultivation-edit"));
const Expenditure = lazy(() => import("../../components/feature/expenditure/expenditure"));
const CreateExpenditure = lazy(() => import("../../components/feature/expenditure/create/expenditure-create"));
// const EditExpenditure = lazy(() => import("../../components/feature/expenditure/edit/expenditure-edit"));



const UI = lazy(() => import("../../pages/ui/ui"));
const SocialMedia = lazy(() => import("../../pages/social-media/social-media"));
const Farmers = lazy(() => import("../../components/feature/farmer/farmer"));
const CreateFarmerDetails = lazy(() => import("../../components/feature/farmer/create/farmer-create"));
const EditFarmer = lazy(() => import("../../components/feature/farmer/edit/farmer-edit"));
const Craft = lazy(() => import("../../components/feature/craft/craft"));
const CreateCraftDetails = lazy(() => import("../../components/feature/craft/create/craft-create"));
const EditCraft = lazy(() => import("../../components/feature/craft/edit/craft-edit")); 
const Category = lazy(()=> import("../../components/feature/category/category"));
const CreateCategoryDetails = lazy(() => import("../../components/feature/category/create/category-create"));
const EditCategory = lazy(() => import("../../components/feature/category/edit/category-edit"));


const RoutesApp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_URL.HOME} element={<BaseLayoutApp />}>
            <Route path={ROUTE_URL.UI} element={<UI />} />
            <Route path={ROUTE_URL.SOCIAL_MEDIA_MANAGEMENT} element={<SocialMedia />} />
            <Route path={ROUTE_URL.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTE_URL.ADMIN.ORGANIZATION_UNITS} element={<OrganizationUnits />} />
            <Route path={ROUTE_URL.ADMIN.SUBSCRIPTION_MANAGEMENT} element={<Subscription />} />
            <Route path={ROUTE_URL.ADMIN.SUBSCRIPTION_MANAGEMENT} element={<Subscription />} />
            <Route path={ROUTE_URL.ADMIN.TENANT.BASE} element={<Tenant />}>
              <Route path={ ROUTE_URL.ADMIN.TENANT.TENANT_LIST} element={<TenantList />} />
              <Route path={ROUTE_URL.ADMIN.TENANT.TENANT_DETAIL} element={<RoleDetail />} />
              <Route path={ROUTE_URL.ADMIN.TENANT.TENANT_DETAIL_EDIT} element={<TenantEdit />} />
              <Route path={ROUTE_URL.ADMIN.TENANT.TENANT_DETAIL_ADD} element={<TenantEdit />} />
            </Route>
            <Route path={ROUTE_URL.ADMIN.ROLE.BASE} element={<Role />}>
              <Route path={ ROUTE_URL.ADMIN.ROLE.ROLE_LIST} element={<RoleList />} />
              <Route path={ROUTE_URL.ADMIN.ROLE.ROLE_DETAIL} element={<RoleDetail />} />
              <Route path={ROUTE_URL.ADMIN.ROLE.ROLE_DETAIL_EDIT} element={<RoleDetailEdit />} />
              <Route path={ROUTE_URL.ADMIN.ROLE.ROLE_DETAIL_ADD} element={<RoleDetailEdit />} />
            </Route>
            <Route path={ROUTE_URL.ADMIN.USER.BASE} element={<User />}>
              <Route path={ROUTE_URL.ADMIN.USER.USER_LIST} element={<UserList />} />
              <Route path={ROUTE_URL.ADMIN.USER.USER_DETAIL} element={<UserDetail />} />
              <Route path={ROUTE_URL.ADMIN.USER.USER_DETAIL_EDIT} element={<UserDetailEdit />} />
              <Route path={ROUTE_URL.ADMIN.USER.USER_PERMISSIONS} element={<UserPermissions />} />
            </Route>
            <Route path={ROUTE_URL.CULTIVATION} element={<Cultivation />}>
              <Route path={ROUTE_URL.CULTIVATION_CREATE} element={< CreateCultivationDetails/>}/>
              <Route path={ROUTE_URL.CULTIVATION_EDIT} element={<EditCultivation/>}/> 
            </Route>
            <Route path={ROUTE_URL.EXPENDITURE} element={< Expenditure/>}>
            <Route path={ROUTE_URL.EXPENDITURE_CREATE} element={< CreateExpenditure/>}/>
            {/* <Route path={ROUTE_URL.EXPENDITURE_EDIT} element={< EditExpenditure/>}/> */}
             
              {/* <Route path={ROUTE_URL.USER_DETAIL} element={<UserDetail />} />
              <Route path={ROUTE_URL.USER_DETAIL_EDIT} element={<UserDetailEdit />} /> */}
            </Route>
            <Route path={ROUTE_URL.FARMERS} element={<Farmers/>} >
              <Route path={ROUTE_URL.FARMER_CREATE} element={<CreateFarmerDetails/>} />
              <Route path={ROUTE_URL.FARMER_EDIT} element={<EditFarmer/>} />
            </Route>
            <Route path={ROUTE_URL.CRAFT} element={<Craft/>} >
              <Route path={ROUTE_URL.CRAFT_CREATE} element={<CreateCraftDetails/>} />
              <Route path={ROUTE_URL.CRAFT_EDIT} element={<EditCraft/>} />
            </Route>
            <Route path={ROUTE_URL.CATEGORY} element={<Category/>} >
              <Route path={ROUTE_URL.CATEGORY_CREATE} element={<CreateCategoryDetails/>} />
              <Route path={ROUTE_URL.CATEGORY_EDIT} element={<EditCategory/>} />
            </Route>
            <Route path={ROUTE_URL.ABOUT} element={<About />} />
            <Route path={ROUTE_URL.CONTACT} element={<Contact />} />
          </Route>
          <Route path={ROUTE_URL.LOGIN} element={<Login />} />
          <Route path={ROUTE_URL.REGISTER} element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default RoutesApp;

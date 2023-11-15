import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayoutApp from "../../layouts/base-layout/base-layout";
import { ROUTE_URL } from "./constants/routes.const";
import ClaimGuard from "./claim.guard";
import NotAllowedApp from "./not-allowed/not-allowed";
import { LOADING } from "../../constants/global-contants/global-key.const";
import {
  TENANTS_VIEW_TENANTS,
  TENANTS_ADD_TENANTS,
  TENANTS_UPDATE_TENANTS,
  ROLES_VIEW_ROLES,
  ROLES_ADD_ROLE,
  ROLES_UPDATE_ROLE,
  USR_ADD_USER,
  USR_UPDATE_USER,
  USR_VIEW_USERS,
  USR_ASSIGN_USR_PERMISSIONS,
  FACILITY_TYPE_ADD_ROLE,
} from "../../constants/global-contants/claims.const";
import FacilityApp from "../feature/gymkhanaclub/admin/facility/facility";
import FacilityListApp from "../feature/gymkhanaclub/admin/facility/list/facility-list";
import FacilityEditApp from "../feature/gymkhanaclub/admin/facility/edit/facility-edit";
import FacilityTypeEditApp from "../feature/gymkhanaclub/admin/facility-type/edit/facility-type-edit";
import FacilityTypeListApp from "../feature/gymkhanaclub/admin/facility-type/list/facility-type-list";
import FacilityTypeApp from "../feature/gymkhanaclub/admin/facility-type/facility-type";
import BookSlotsApp from "../feature/gymkhanaclub/book-slots/book-slots";
import BookSlotsListApp from "../feature/gymkhanaclub/book-slots/list/book-slots-list";
import BookSlotsEditApp from "../feature/gymkhanaclub/book-slots/edit/book-slots-edit";
import FacilityCostingApp from "../feature/gymkhanaclub/admin/facility-costing/facility-costing";
import FacilityCostingListApp from "../feature/gymkhanaclub/admin/facility-costing/list/facility-costing-list";
import FacilityCostingEditApp from "../feature/gymkhanaclub/admin/facility-costing/edit/facility-costing-edit";
import OrganizationUnitsListApp from "../administration/organization-units/list/organization-units-list";
import OrganizationUnitsEditApp from "../administration/organization-units/edit/organization-units-edit";
import TenantSettingsApp from "../administration/tenant-settings/tenant-settings";

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

const Signup = lazy(() => import("../../components/feature/gymkhanaclub/user-signup/user-signup"));
const UI = lazy(() => import("../../pages/ui/ui"));
const SocialMedia = lazy(() => import("../../pages/social-media/social-media"));

const RoutesApp = () => {
  return (
    <Suspense fallback={<div>{LOADING}</div>}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_URL.LOGIN} element={<Login />} />
          <Route path={ROUTE_URL.REGISTER} element={<Register />} />
          <Route path={ROUTE_URL.GYMKHANACLUB.SIGNUP} element={<Signup />} />

          <Route path={ROUTE_URL.HOME} element={<BaseLayoutApp />}>
            <Route path={ROUTE_URL.UI} element={<UI />} />
            <Route path={ROUTE_URL.SOCIAL_MEDIA_MANAGEMENT} element={<SocialMedia />} />
            <Route path={ROUTE_URL.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTE_URL.ADMIN.SUBSCRIPTION_MANAGEMENT} element={<Subscription />} />
            <Route path={ROUTE_URL.ABOUT} element={<About />} />
            <Route path={ROUTE_URL.CONTACT} element={<Contact />} />
            <Route path={ROUTE_URL.NOT_ALLOWED} element={<NotAllowedApp />} />
            <Route path={ROUTE_URL.TENANT_SETTINGS} element={<TenantSettingsApp />} />


            {/* ADMINSTRATION */}
            <Route>
              <Route
                path={ROUTE_URL.ADMIN.ORGANIZATION_UNITS.BASE}
                element={<OrganizationUnits />}
              >
                <Route
                  path={ROUTE_URL.ADMIN.ORGANIZATION_UNITS.LIST}
                  element={<OrganizationUnitsListApp />}
                />
                <Route
                  path={ROUTE_URL.ADMIN.ORGANIZATION_UNITS.EDIT}
                  element={<OrganizationUnitsEditApp />}
                />
                <Route
                  path={ROUTE_URL.ADMIN.ORGANIZATION_UNITS.ADD}
                  element={<OrganizationUnitsEditApp />}
                />
              </Route>

              <Route
                path={ROUTE_URL.ADMIN.TENANT.BASE}
                element={<Tenant />}
              >
                <Route
                  path={ROUTE_URL.ADMIN.TENANT.LIST}
                  element={
                    <ClaimGuard requiredClaims={[TENANTS_VIEW_TENANTS]}>
                      <TenantList />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.ADMIN.TENANT.ADD}
                  element={
                    <ClaimGuard requiredClaims={[TENANTS_ADD_TENANTS]}>
                      <TenantEdit />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.ADMIN.TENANT.EDIT}
                  element={
                    <ClaimGuard requiredClaims={[TENANTS_UPDATE_TENANTS]}>
                      <TenantEdit />
                    </ClaimGuard>
                  }
                />

              </Route>

              <Route
                path={ROUTE_URL.ADMIN.ROLE.BASE}
                element={<Role />}
              >
                <Route
                  path={ROUTE_URL.ADMIN.ROLE.LIST}
                  element={
                    <ClaimGuard requiredClaims={[ROLES_VIEW_ROLES]}>
                      <RoleList />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.ADMIN.ROLE.DETAIL}
                  element={
                    <ClaimGuard requiredClaims={[ROLES_VIEW_ROLES]}>
                      <RoleDetail />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.ADMIN.ROLE.ADD}
                  element={
                    <ClaimGuard requiredClaims={[ROLES_ADD_ROLE]}>
                      <RoleDetailEdit />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_TYPE.ADD}
                  element={
                    <ClaimGuard requiredClaims={[FACILITY_TYPE_ADD_ROLE]}>
                      <RoleDetailEdit />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.ADMIN.ROLE.EDIT}
                  element={
                    <ClaimGuard requiredClaims={[ROLES_ADD_ROLE, ROLES_UPDATE_ROLE]}>
                      <RoleDetailEdit />
                    </ClaimGuard>
                  }
                />
              </Route>

              <Route
                path={ROUTE_URL.ADMIN.USER.BASE}
                element={<User />}
              >
                <Route
                  path={ROUTE_URL.ADMIN.USER.LIST}
                  element={
                    <ClaimGuard requiredClaims={[USR_VIEW_USERS]}>
                      <UserList />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.ADMIN.USER.DETAIL}
                  element={
                    <ClaimGuard requiredClaims={[USR_VIEW_USERS]}>
                      <UserDetail />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.ADMIN.USER.ADD}
                  element={
                    <ClaimGuard requiredClaims={[USR_ADD_USER]}>
                      <UserDetailEdit />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.ADMIN.USER.EDIT}
                  element={
                    <ClaimGuard requiredClaims={[USR_ADD_USER, USR_UPDATE_USER]}>
                      <UserDetailEdit />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.ADMIN.USER.PERMISSIONS}
                  element={
                    <ClaimGuard requiredClaims={[USR_ASSIGN_USR_PERMISSIONS]}>
                      <UserPermissions />
                    </ClaimGuard>
                  }
                />
              </Route>
            </Route>

            {/* GYMKHANA APP */}
            <Route>
              <Route
                path={ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_TYPE.BASE}
                element={<FacilityTypeApp />}
              >
                <Route
                  path={ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_TYPE.LIST}
                  element={
                    <ClaimGuard requiredClaims={[]}>
                      <FacilityTypeListApp />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_TYPE.EDIT}
                  element={
                    <ClaimGuard requiredClaims={[]}>
                      <FacilityTypeEditApp />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_TYPE.ADD}
                  element={
                    <ClaimGuard requiredClaims={[]}>
                      <FacilityTypeEditApp />
                    </ClaimGuard>
                  }
                />
              </Route>

              <Route
                path={ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY.BASE}
                element={<FacilityApp />}
              >
                <Route
                  path={ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY.LIST}
                  element={
                    <ClaimGuard requiredClaims={[]}>
                      <FacilityListApp />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY.EDIT}
                  element={
                    <ClaimGuard requiredClaims={[]}>
                      <FacilityEditApp />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY.ADD}
                  element={
                    <ClaimGuard requiredClaims={[]}>
                      <FacilityEditApp />
                    </ClaimGuard>
                  }
                />
              </Route>

              <Route
                path={ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_COSTING.BASE}
                element={<FacilityCostingApp />}
              >
                <Route
                  path={ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_COSTING.LIST}
                  element={
                    <ClaimGuard requiredClaims={[]}>
                      <FacilityCostingListApp />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_COSTING.EDIT}
                  element={
                    <ClaimGuard requiredClaims={[]}>
                      <FacilityCostingEditApp />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_COSTING.ADD}
                  element={
                    <ClaimGuard requiredClaims={[]}>
                      <FacilityCostingEditApp />
                    </ClaimGuard>
                  }
                />
              </Route>

              <Route
                path={ROUTE_URL.GYMKHANACLUB.FACILITY_BOOK_SLOTS.BASE}
                element={<BookSlotsApp />}
              >
                <Route
                  path={ROUTE_URL.GYMKHANACLUB.FACILITY_BOOK_SLOTS.LIST}
                  element={
                    <ClaimGuard requiredClaims={[]}>
                      <BookSlotsListApp />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.GYMKHANACLUB.FACILITY_BOOK_SLOTS.EDIT}
                  element={
                    <ClaimGuard requiredClaims={[]}>
                      <BookSlotsEditApp />
                    </ClaimGuard>
                  }
                />
                <Route
                  path={ROUTE_URL.GYMKHANACLUB.FACILITY_BOOK_SLOTS.ADD}
                  element={
                    <ClaimGuard requiredClaims={[]}>
                      <BookSlotsEditApp />
                    </ClaimGuard>
                  }
                />
              </Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense >
  );
};

export default RoutesApp;

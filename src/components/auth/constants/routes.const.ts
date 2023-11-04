export const ROUTE_URL = {
  HOME: "",
  DASHBOARD: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  ABOUT: "/about",
  CONTACT: "/contact",
  UI: "/ui",
  NOT_ALLOWED: "/not-allowed",
  SOCIAL_MEDIA_MANAGEMENT: "/social-media",
  ADMIN: {
    BASE: "/admin",
    ORGANIZATION_UNITS: "organization-units",
    TENANT: {
      BASE: "/tenant",
      TENANT_LIST: "",
      TENANT_DETAIL: ":id",
      TENANT_DETAIL_EDIT: "edit/:id",
      TENANT_DETAIL_ADD: "add",
    },
    ROLE: {
      BASE: "/role",
      ROLE_LIST: "",
      ROLE_DETAIL: ":id",
      ROLE_DETAIL_EDIT: "edit/:id",
      ROLE_DETAIL_ADD: "add",
    },
    USER: {
      BASE: "/user",
      USER_LIST: "",
      USER_DETAIL: ":id",
      USER_DETAIL_EDIT: "edit/:id",
      USER_DETAIL_ADD: "add",
      USER_PERMISSIONS: "permissions/:id",
    },
    SUBSCRIPTION_MANAGEMENT: "subscription-management",
  },
  GYMKHANACLUB: {
    BASE: "",
    ADMIN: {
      FACILITY: {
        BASE: "/facility",
        LIST: "",
        EDIT: "edit/:id",
        ADD: "add",
      },
      FACILITY_TYPE: {
        BASE: "/facility-type",
        LIST: "",
        EDIT: "edit/:id",
        ADD: "add",
      },
      FACILITY_COSTING: {
        BASE: "/facility-costing",
        LIST: "",
        EDIT: "edit/:id",
        ADD: "add",
      },
    },
    FACILITY_BOOK_SLOTS: {
      BASE: "/book-slots",
      LIST: "",
      EDIT: "edit/:id",
      ADD: "add",
    },
    SIGNUP: "signup",
  }
};

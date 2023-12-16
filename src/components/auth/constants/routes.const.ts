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
  TENANT_SETTINGS: "/tenant-settings",
  ADMIN: {
    BASE: "/admin",
    ORGANIZATION_UNITS: {
      BASE: "/organization-units",
      LIST: "",
      EDIT: "edit/:id",
      ADD: "add",
    },
    TENANT: {
      BASE: "/tenant",
      LIST: "",
      DETAIL: ":id",
      EDIT: "edit/:id",
      ADD: "add",
    },
    ROLE: {
      BASE: "/role",
      LIST: "",
      DETAIL: ":id",
      EDIT: "edit/:id",
      ADD: "add",
    },
    USER: {
      BASE: "/user",
      LIST: "",
      DETAIL: ":id",
      EDIT: "edit/:id",
      ADD: "add",
      PERMISSIONS: "permissions/:id",
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
      // BOOK: "book"
    },
    SIGNUP: "signup",
  },
  TICKETING_TOOL: {
    BASE: "",
    DASHBOARD: "/ticketing",
    SOCIAL_LOGINS: "/social-login",
  },

};

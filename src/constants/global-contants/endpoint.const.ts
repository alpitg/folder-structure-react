export const ENDPOINT = {
  BASE_URL: "http://localhost:3000",
  API_BASE_URL: "https://localhost:7270",
  AUTH: {
    API: {
      login: "/api/authentication",
      pages: "/api/pages",
      actions: "/api/actions",
    },
  },
  TENANT: {
    API: {
      FETCH_TENANTS: "/api/tenant",
      FETCH_TENANT: "/api/tenant/{id}",
      ADD_TENANT: "/api/tenant",
      UPDATE_TENANT: "/api/tenant",
      DELETE_TENANT: "/api/tenant/{id}",
    },
  },
  USER: {
    API: {
      FETCH_USERS: "/api/user/getUsers",
      FETCH_USER: "/api/user",
      ADD_USER: "/api/user",
      UPDATE_USER: "/api/user",
      UPDATE_USER_CLAIM: "/api/userClaim",
      DELETE_USER: "/api/user",
    },
  },
  ROLE: {
    API: {
      FETCH_ROLES: "/api/role",
      ADD_ROLE: "/api/role",
      UPDATE_ROLE: "/api/role",
      DELETE_ROLE: "/api/role",
    },
  },
  FACILITYTYPE: {
    API: {
      FETCH_FACILITYTYPE: "/api/facilitesType/getFacilityType",
      ADD_FACILITYTYPE: "/api/facilitesType/addFacilityType",
      UPDATE_FACILITYTYPE: "/api/facilitesType/facilityType",
      // DELETE_ROLE: "/api/role",
    },
  },
  FACILITY: {
    API: {
      FETCH_FACILITY: "/api/facilites/getFacility",
     
      DELETE_ROLE: "/api/role",
    },
  },
  SOCIAL_MEDIA: {
    API: {
      PYTHON_API: {
        BASE: "http://127.0.0.1:5000",
        POST_CONTENT: "/post-content",
      },
      INSTA: {
        BASE: "https://graph.facebook.com/v17.0/",
      },
      // "https://graph.facebook.com/v17.0/me/accounts?access_token=EAALLrs8kZAJMBO2rprnZAvV67UILRjS2JlyZCbbzRQXjUI33rSSf9YxRub8R6kAMtf4ju6FB7KzYx8InaChtZAMnkHWA22nRHiIdxF1c80FY8ZAsvXHLuM3ODc4wEb5j6XbS0SThfzryAYazpTOWpnmsoATu2d7LF7l6C6OHfbPyE0cQtnct8PPTstJKN5eKf3R2koGkZCeh14OQl39XHbZCt99TSVx37AvqooZD&debug=all&fields=instagram_business_account%2Cfollowers_count%2Cname%2Cconnected_instagram_account&format=json&method=get&pretty=0&suppress_http_code=1&transport=cors",
    },
  },
};

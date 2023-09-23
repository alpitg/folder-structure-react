export const ENDPOINT = {
  BASE_URL: "http://localhost:3000",
  TENANT: {
    API: {
      FETCH_TENANTS: "/mock/tenants.json",
      UPDATE_TENANT: "/tenant",
      DELETE_TENANT: "/tenant",
    },
  },
  USER: {
    API: {
      FETCH_USERS: "/mock/users.json",
      UPDATE_USER: "/user",
      DELETE_USER: "/user",
    },
  },
  ROLE: {
    API: {
      FETCH_ROLES: "/mock/roles.json",
      UPDATE_ROLE: "/role",
      DELETE_ROLE: "/role",
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

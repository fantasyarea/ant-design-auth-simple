const Domain = ''; /* 使用当前域名留空 */
const BaseUrl = `${Domain}/api`;

export const Public = {
  Login: {
    Base: `${BaseUrl}/auth/signin`,
    Exit: `${BaseUrl}/auth/signout`,
  },
};

export const Demo = {
  Base: `${BaseUrl}/api/demos`,
};

export const Menu = {
  Base: `${BaseUrl}/api/menus`,
  Tree: `${BaseUrl}/api/menus.tree`,
};

export const Role = {
  Base: `${BaseUrl}/api/roles`,
  Select: `${BaseUrl}/api/roles.select`,
};

export const User = {
  Base: `${BaseUrl}/api/users`,
};

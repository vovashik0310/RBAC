const roles = require("../config/roles.json");

class Permissions {
  constructor() {
    this.permissions = [];
  }
  getPermissionsByRoleName(roleName) {
    const role = roles.roles.find((r) => r.name === roleName);
    return role ? role.permissions : [];
  }
}

module.exports = Permissions;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../auth/guard/auth.guard");
const roles_guard_1 = require("../../auth/guard/roles.guard");
const roles_decoradors_1 = require("./roles.decoradors");
function Auth(role) {
    return (0, common_1.applyDecorators)((0, roles_decoradors_1.Roles)(...role), (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard));
}
exports.Auth = Auth;
//# sourceMappingURL=auth.decorador.js.map
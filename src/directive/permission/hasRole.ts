/**
 * 角色权限处理
 */

import store from "@/store";
import { DirectiveOptions } from "vue";

const Rolepermissions: DirectiveOptions = {
  inserted(el: HTMLElement, binding): void {
    const { value } = binding;
    const super_admin = "admin";
    const roles = store.getters && store.getters.roles;

    if (value && value instanceof Array && value.length > 0) {
      const roleFlag = value;

      const hasRole = roles.some((role: any) => {
        return super_admin === role || roleFlag.includes(role);
      });

      if (!hasRole) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(`请设置角色权限标签值"`);
    }
  },
};
export default Rolepermissions;

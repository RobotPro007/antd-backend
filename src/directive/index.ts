import Rolepermissions from "./permission/hasRole";
import OperationAuthority from "./permission/hasPermi";
import { DirectiveOptions } from "vue";
const install = function (Vue: {
  directive: (arg0: string, arg1: DirectiveOptions) => void;
}): void {
  Vue.directive("hasRole", Rolepermissions);
  Vue.directive("hasPermi", OperationAuthority);
};
export default install;

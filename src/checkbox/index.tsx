import InternalCheckbox from "./Checkbox";
import CheckboxGroup from "./CheckboxGroup";
type CheckboxType = typeof InternalCheckbox;

interface CheckboxInterface extends CheckboxType {
  Group: typeof CheckboxGroup;
}

const Checkbox = InternalCheckbox as CheckboxInterface;
Checkbox.Group = CheckboxGroup;
export default Checkbox;

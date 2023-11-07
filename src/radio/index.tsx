import InternalRadio from "./Radio";
import RadioGroup from "./RadioGroup";

type radioType = typeof InternalRadio;

// 类型转换
interface RadioInterface extends radioType {
  RadioGroup: typeof RadioGroup;
}

const Radio = InternalRadio as RadioInterface;

Radio.RadioGroup = RadioGroup;

export default Radio;

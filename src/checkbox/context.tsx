import { createContext } from "react";

export interface CheckboxContextProps {
  value: string[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange: (e: unknown) => void;
  disabled: boolean;
}

const CheckboxContext = createContext<CheckboxContextProps>({
  value: [],
  onChange: () => {},
  disabled: false,
});

export default CheckboxContext;

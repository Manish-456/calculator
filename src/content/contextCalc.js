import { createContext, useContext, useState } from "react";

const contextCalc = createContext();

export const CalcProvider = ({ children }) => {
  const [val, setVal] = useState("");
  const clickHandler = (e) => {
    setVal(val + e.target.name);
  };
  const clear = () => {
    setVal("");
  };
  const backSpace = () => {
    setVal(val.slice(0, -1));
  };

  const output = () => {
    try {
      const data = eval(val).toString();
      setVal(data);
    } catch (err) {
      setVal("Err");
    }
  };
  const value = {
    val,
    clickHandler,
    clear,
    output,
    backSpace,
  };
  return <contextCalc.Provider value={value}>{children}</contextCalc.Provider>;
};

export const useCalcContext = () => {
  return useContext(contextCalc);
};

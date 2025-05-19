import { createContext, useContext, useState } from "react";
export const ArrayContext = createContext([]);
const DataProvider = ({ children }) => {
  const [array, setArray] = useState([]);

  return (
    <ArrayContext.Provider value={{ array, setArray }}>
      {children}
    </ArrayContext.Provider>
  );
};
export const useArray = () => useContext(ArrayContext);
export default DataProvider;

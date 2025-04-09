import { useState } from "react";
import PcContext from "./pcContext"

function PcContextProvider({ children }) {
  const [pc, setPc] = useState(null);

  return (
    <PcContext.Provider value={{pc, setPc }}>
      {children}
    </PcContext.Provider>
  );
}

export default PcContextProvider;

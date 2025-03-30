import { createContext, useState } from "react";

const UserContext = createContext(0);

function Context({ children }) {
  const [user, setUser] = useState(UserContext);
  return <UserContext.Provider>{children}</UserContext.Provider>;
}

export default UserContext;

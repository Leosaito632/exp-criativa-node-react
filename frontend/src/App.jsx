import Header from "./components/header";
import UserProvider from "./components/userProvider";

import Crud from "./pages/crud";
import Detalhes from "./pages/detalhes";
import Footer from "./pages/footer";
import Users from "./pages/users";

import UserContext from './components/context';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <UserContext.Provider>
        <Router>
          <Header></Header>
          <Routes>
            <Route
              path="/"
              element={<Users />}
            ></Route>
            <Route
              path="/crud"
              element={<Crud />}
            ></Route>
            <Route
              path="/detalhes"
              element={<Detalhes />}
            ></Route>
          </Routes>
        </Router>
        <Footer></Footer>
      </UserContext.Provider>
    </>
  );
}

export default App;

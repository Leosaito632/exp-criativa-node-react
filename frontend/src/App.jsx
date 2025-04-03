import Header from "./components/header";
import UserContextProvider from "./components/userContextProvider";

import Crud from "./pages/crud";
import Detalhes from "./pages/detalhes";
import Footer from "./components/footer";
import Users from "./pages/users";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Users />}></Route>
            <Route path="/crud" element={<Crud />}></Route>
            <Route path="/detalhes" element={<Detalhes />}></Route>
          </Routes>
        </Router>
        <Footer></Footer>
      </UserContextProvider>
    </>
  );
}

export default App;

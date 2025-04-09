import Header from "./components/header";
import PcContextProvider from "./components/pcContextProvider";

import Crud from "./pages/crud";
import Detalhes from "./pages/detalhes";
import Footer from "./components/footer";
import Pcs from "./pages/pcs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <PcContextProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Pcs />}></Route>
            <Route path="/crud" element={<Crud />}></Route>
            <Route path="/detalhes" element={<Detalhes />}></Route>
          </Routes>
        </Router>
        <Footer></Footer>
      </PcContextProvider>
    </>
  );
}

export default App;

import "./App.css";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CasePage from "./components/Case page/CasePage";
function App() {
  return (
    <div className="app">
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/:caseID" element={<CasePage />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;

import "./App.css";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/notfound/NotFound";
import { NigeriaMapPage } from "./pages/nigeriamapage/NigeriaMapPage";
import { NavBar } from "./components";
import { StateContextProvider } from "./context/Context";
function App() {
  return (
    <div className="App">
      <Router>
        <StateContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<NigeriaMapPage />} />
            <Route path="/map" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StateContextProvider>
      </Router>
    </div>
  );
}

export default App;

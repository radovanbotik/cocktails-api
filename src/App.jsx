import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Cocktail from "./pages/Cocktail";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Shared from "./pages/Shared";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shared />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="cocktail/:id" element={<Cocktail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

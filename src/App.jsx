import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Postar } from "./pages/Postar";
import { Atualizar } from "./pages/Atualizar";
import { Editar } from "./pages/Editar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postar" element={<Postar />} />
        <Route path="/atualizar" element={<Atualizar />} />
        <Route path="/editar/:id" element={<Editar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

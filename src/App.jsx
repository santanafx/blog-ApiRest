import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Postar } from "./pages/Postar";
import { Atualizar } from "./pages/Atualizar";
import { Editar } from "./pages/Editar";
import { Footer } from "./components/Footer";
import { Gestao } from "./pages/Gestao";
import { Inovacao } from "./pages/Inovacao";
import { Transformacao } from "./pages/Transformacao";
import { Post } from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postar" element={<Postar />} />
        <Route path="/atualizar" element={<Atualizar />} />
        <Route path="/gestao" element={<Gestao />} />
        <Route path="/inovacao" element={<Inovacao />} />
        <Route path="/transformacao" element={<Transformacao />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/editar/:id" element={<Editar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

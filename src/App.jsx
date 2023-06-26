import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Data } from "./pages/Data";
import { UpdateData } from "./pages/UpdateData";
import { Test } from "./pages/Test";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/test" element={<Test />} />
        <Route path="/updateData/:id" element={<UpdateData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Data } from "./pages/Data";
import { UpdateData } from "./pages/UpdateData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/updateData/:id" element={<UpdateData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

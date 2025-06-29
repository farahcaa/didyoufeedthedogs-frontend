import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

function App() {
  return (
    // Default font is Times New Roman
    <div className="font-['Roboto_Mono'] h-full">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

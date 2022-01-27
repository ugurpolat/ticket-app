import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
// Pages

import BasvuruOlustur from "./pages/BasvuruOlustur";
import BasvuruBasarili from "./pages/BasvuruBasarili";
import BasvuruSorgula from "./pages/BasvuruSorgula";
import Basvuru from "./pages/Basvuru";
import Admin from "./pages/Admin";
import AdminBasvuru from "./pages/AdminBasvuru";
import AdminBasvuruList from "./pages/AdminBasvuruList";
import Page404 from "./pages/Page404";
import Navbar from "./components/Navbar";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header>
          <h1>Ticket App</h1>
        </header>

        <Router>
          <Routes>
            <Route exact path="/" element={<BasvuruOlustur />} />
            <Route path="/basvuru-basarili" element={<BasvuruBasarili />} />
            <Route path="/basvuru-sorgula" element={<BasvuruSorgula />} />
            <Route path="/basvuru/:id" element={<Basvuru />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/basvuru-listesi" element={<AdminBasvuruList />} />
            <Route path="/admin/basvuru/:id" element={<AdminBasvuru />} />
            <Route path="/basvuru/404" element={<Page404 />} />
          </Routes>
          <Navbar />
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;

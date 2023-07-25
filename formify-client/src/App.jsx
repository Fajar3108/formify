import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import FormDetail from "./pages/FormDetail";
import CreateForm from "./pages/CreateForm";

function App() {
  const navigate = useNavigate();

  function handleLogout() {
    fetch("http://localhost:8000/api/logout", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((resJson) => {
        localStorage.removeItem("token");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {localStorage.getItem("token") ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forms/:slug" element={<FormDetail />} />
        <Route path="/forms/create" element={<CreateForm />} />
      </Routes>
    </>
  );
}

export default App;

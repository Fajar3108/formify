import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/");
  }, []);

  function handleLogin() {
    fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((resJson) => {
        localStorage.setItem("token", resJson.user?.accessToken);
        navigate("/");
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <h1>Login</h1>
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="example@mail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="*******"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;

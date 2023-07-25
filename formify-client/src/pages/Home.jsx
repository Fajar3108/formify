import { useEffect } from "react";
import FormTable from "../components/FormTable";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/login");
  }, []);

  return (
    <>
      <h1>My Forms</h1>
      <p>
        <Link to="/forms/create">Add New Form</Link>
      </p>
      <FormTable />
    </>
  );
}

export default Home;

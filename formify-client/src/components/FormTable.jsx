import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FormTable() {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Component did Mount");
    fetch("http://localhost:8000/api/v1/forms", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((resJson) => setForms(resJson.forms))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? <p>Loading...</p> : null}
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form) => (
            <tr key={form.id}>
              <td>
                <Link to={`/forms/${form.slug}`}>{form.name}</Link>
              </td>
              <td>{form.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FormTable;

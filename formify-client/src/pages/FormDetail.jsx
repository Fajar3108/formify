import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FormDetail() {
  const { slug } = useParams();
  const [form, setForm] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/forms/${slug}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((resJson) => setForm(resJson.form))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Form Detail: {form.name}</h1>
      <p>{form.description}</p>
      <table border={1}>
        <tbody>
          <tr>
            <th>Limited one response</th>
            <td>{form.limited_one_response ? "true" : "false"}</td>
          </tr>
          <tr>
            <th>Allowed Domains</th>
            <td>{form.allowed_domains?.join(", ")}</td>
          </tr>
          <tr>
            <th>Url</th>
            <td>
              {window.location.href}
              <button
                onClick={() =>
                  navigator.clipboard.writeText(window.location.href)
                }
              >
                Copy to clipboard
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default FormDetail;

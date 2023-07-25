import { useState } from "react";

function CreateForm() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [limiteOneResponse, setLimitedOneResponse] = useState(false);
  const [inputDomain, setInputDomain] = useState("");
  const [allowedDomains, setAllowedDomains] = useState([]);

  function handleAddDomain() {
    setAllowedDomains([...allowedDomains, inputDomain]);
  }

  function handleRemoveDomain(index) {
    const newAllowedDomains = allowedDomains.filter((domain, i) => i !== index);

    setAllowedDomains(newAllowedDomains);
  }

  return (
    <>
      <h1>Create New Form</h1>
      <form>
        <div>
          <label>Name</label>
          <br />
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Slug</label>
          <br />
          <input type="text" onChange={(e) => setSlug(e.target.value)} />
        </div>
        <div>
          <label>Allowed Domains</label>
          <br />
          <input type="text" onChange={(e) => setInputDomain(e.target.value)} />
          <button type="button" onClick={handleAddDomain}>
            Add
          </button>
          <ul>
            {allowedDomains.map((domain, index) => (
              <li key={index}>
                {domain}
                <button type="button" onClick={() => handleRemoveDomain(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <label>Description</label>
          <br />
          <textarea
            cols="30"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Limited one response?</label>
          <input
            type="checkbox"
            onChange={() => setLimitedOneResponse(!limiteOneResponse)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default CreateForm;

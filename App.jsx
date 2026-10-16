import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const sections = ["Piłka nożna", "Szachy", "Robotyka", "Pływanie"];
  const [fullname, setFullname] = useState('');
  const [sectionNumber, setSectionNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullname);
    const index = parseInt(sectionNumber, 10) - 1;

    if (index >= 0 && index < sections.length) {
      console.log(sections[index]);
    } else {
      console.log("Nieprawidłowy numer sekcji");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Liczba sekcji: {sections.length}</h2>

      <ol className="list-group list-group-numbered my-3">
        {sections.map((section, index) => (
          <li key={index} className="list-group-item border-0">
            {section}
          </li>
        ))}
      </ol>

      <form onSubmit={handleSubmit} className="w-50">
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Imię i nazwisko:
          </label>
          <input
            type="text"
            id="fullname"
            className="form-content form-control"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="sectionNumber" className="form-label">
            Numer sekcji:
          </label>
          <input
            type="number"
            id="sectionNumber"
            className="form-content form-control"
            value={sectionNumber}
            onChange={(e) => setSectionNumber(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Zapisz
        </button>
      </form>
    </div>
  );
}

export default App;
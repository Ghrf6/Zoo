import React, { useState } from 'react';
import './App.css';

function App() {
// Initialzustand für Veranstaltungen - eine Liste von Events mit verschiedenen Details
const initialEvents = [
  // Jedes Event ist ein Objekt mit Name, Zeit, Zielgruppe und Datum
  { name: "Falken Flugshow", zeit: "10:00", zielgruppe: "Familien", datum: "2023-12-02" },
  { name: "Löwenfütterung", zeit: "11:00", zielgruppe: "Alle", datum: "2023-12-03" },
  { name: "Schmetterlingshaus Tour", zeit: "12:00", zielgruppe: "Kinder", datum: "2023-12-02" },
  { name: "Aquarium Führung", zeit: "13:00", zielgruppe: "Senioren", datum: "2023-12-03" },
  { name: "Elefanten Baden", zeit: "14:00", zielgruppe: "Familien", datum: "2023-12-02" },
  { name: "Giraffen Treffen", zeit: "15:00", zielgruppe: "Alle", datum: "2023-12-03" },
  { name: "Zebra Safari", zeit: "16:00", zielgruppe: "Paare", datum: "2023-12-02" },
  { name: "Papageien Sprechen", zeit: "17:00", zielgruppe: "Kinder", datum: "2023-12-03" },
  { name: "Nashorn Spaziergang", zeit: "18:00", zielgruppe: "Senioren", datum: "2023-12-02" },
  { name: "Koala Klettern", zeit: "10:30", zielgruppe: "Familien", datum: "2023-12-02" },
  { name: "Känguru Springen", zeit: "11:30", zielgruppe: "Alle", datum: "2023-12-03" },
  { name: "Bären Beobachtung", zeit: "13:30", zielgruppe: "Paare", datum: "2023-12-02" },
  { name: "Eisbären Schwimmen", zeit: "14:30", zielgruppe: "Kinder", datum: "2023-12-02" },
  { name: "Wolfsrudel Wanderung", zeit: "15:30", zielgruppe: "Alle", datum: "2023-12-03" },
  { name: "Delfinshow", zeit: "16:30", zielgruppe: "Familien", datum: "2023-12-03" }
];

  // State-Hooks für Veranstaltungen, Sortierung und ausgewähltes Datum
  const [events, setEvents] = useState(initialEvents);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [selectedDate, setSelectedDate] = useState('');

  // Funktion zum Sortieren der Events basierend auf Schlüssel und Richtung
  const sortEvents = (key) => {
    let direction = 'ascending';
    // Umschalten der Sortierrichtung, wenn auf denselben Schlüssel geklickt wird
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    // Sortierung der Events
    setEvents([...events].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    }));
  };

  // Filtern der Events basierend auf dem ausgewählten Datum
  const filteredEvents = selectedDate
    ? events.filter(event => event.datum === selectedDate)
    : events;

  return (
    <div className="App">
      <div className="container mt-5">
        <h1 className="mb-4">Zoo Events</h1>

        <div className="mb-3">
          <label htmlFor="datePicker" className="form-label">Datum:</label>
          <input type="date" className="form-control" id="datePicker" onChange={e => setSelectedDate(e.target.value)} />
        </div>

        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Event</th>
              <th style={{ cursor: 'pointer' }} onClick={() => sortEvents('zeit')}>Zeit</th>
              <th style={{ cursor: 'pointer' }} onClick={() => sortEvents('zielgruppe')}>Zielgruppe</th>
              <th>Datum</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event, index) => (
              <tr key={index}>
                <td>{event.name}</td>
                <td>{event.zeit}</td>
                <td>{event.zielgruppe}</td>
                <td>{event.datum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

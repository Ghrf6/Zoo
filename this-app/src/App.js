import React, { useState } from 'react';
import './App.css';
import EventTable from './EventTable';
import { initialEvents, sortEvents } from './utils';

function App() {
  const [events, setEvents] = useState(initialEvents);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [selectedDate, setSelectedDate] = useState('');

  const handleSort = (key) => {
    setEvents(sortEvents(events, key, sortConfig, setSortConfig));
  };

  const filteredEvents = selectedDate
    ? events.filter(event => event.datum === selectedDate)
    : events;

  return (
    <div className="App">
      <div className="container mt-5">
        <h1 className="mb-4">Zoo Events</h1>
        <div className="mb-3">
          <label htmlFor="datePicker" className="form-label">Datum:</label>
          <input 
            type="date" 
            className="form-control" 
            id="datePicker" 
            onChange={e => setSelectedDate(e.target.value)} 
          />
        </div>
        <EventTable events={filteredEvents} onSort={handleSort} />
      </div>
    </div>
  );
}

export default App;

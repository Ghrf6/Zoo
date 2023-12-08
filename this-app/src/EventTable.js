import React from 'react';

function EventTable({ events, onSort }) {
  return (
    <table className="table table-hover">
      <thead className="table-light">
        <tr>
          <th>Event</th>
          <th style={{ cursor: 'pointer' }} onClick={() => onSort('zeit')}>Zeit</th>
          <th style={{ cursor: 'pointer' }} onClick={() => onSort('zielgruppe')}>Zielgruppe</th>
          <th>Datum</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <tr key={index}>
            <td>{event.name}</td>
            <td>{event.zeit}</td>
            <td>{event.zielgruppe}</td>
            <td>{event.datum}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EventTable;

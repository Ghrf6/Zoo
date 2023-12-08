export const initialEvents = [
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
export const sortEvents = (events, key, sortConfig, setSortConfig) => {
  let direction = 'ascending';
  if (sortConfig.key === key && sortConfig.direction === 'ascending') {
    direction = 'descending';
  }
  setSortConfig({ key, direction });

  return [...events].sort((a, b) => {
    if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
    if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
    return 0;
  });
};



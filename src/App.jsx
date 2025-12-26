import { useCalendar } from './hooks/useCalendar'

function App() {
  const {
    currentYear,
    currentMonth,
    days,
    goToPreviousMonth,
    goToNextMonth,
  } = useCalendar()

  const monthName = new Date(currentYear, currentMonth).toLocaleString(
    'es-AR',
    { month: 'long' }
  )

  return (
    <div style={{ padding: 20 }}>
      <h1>Calendario familiar</h1>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button onClick={goToPreviousMonth}>◀</button>
        <h2>
          {monthName} {currentYear}
        </h2>
        <button onClick={goToNextMonth}>▶</button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: 10,
          marginTop: 20,
        }}
      >
        {days.map(day => (
          <div
            key={day.date.toISOString()}
            style={{
              border: '1px solid #ccc',
              padding: 10,
              minHeight: 80,
            }}
          >
            <strong>{day.dayNumber}</strong>
            <div>{day.assignedTo}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

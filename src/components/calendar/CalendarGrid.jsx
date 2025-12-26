import CalendarDay from './CalendarDay'

function CalendarGrid({ days }) {
  const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

  return (
    <div className="calendar-grid">
      {weekDays.map(day => (
        <div key={day} className="calendar-weekday">
          {day}
        </div>
      ))}

      {days.map(day => (
        <CalendarDay key={day.date.toISOString()} day={day} />
      ))}
    </div>
  )
}

export default CalendarGrid

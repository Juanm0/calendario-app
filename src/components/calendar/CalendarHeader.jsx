function CalendarHeader({ year, month, onPrev, onNext }) {
  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]

  return (
    <div className="calendar-header">
      <button onClick={onPrev}>◀</button>

      <h2>
        {monthNames[month]} {year}
      </h2>

      <button onClick={onNext}>▶</button>
    </div>
  )
}

export default CalendarHeader

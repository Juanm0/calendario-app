function CalendarDay({ day }) {
  return (
    <div className="calendar-day">
      <div className="day-number">{day.dayNumber}</div>

      <div className="day-assignment">
        {day.assignedTo === 'comodin' ? 'Comodín' : day.assignedTo}
      </div>
    </div>
  )
}

export default CalendarDay

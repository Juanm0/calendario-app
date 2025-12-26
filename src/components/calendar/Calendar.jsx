import { useCalendar } from '../../hooks/useCalendar'
import CalendarHeader from './CalendarHeader'
import CalendarGrid from './CalendarGrid'
import '../../styles/calendar.css'

function Calendar() {
  const {
    currentYear,
    currentMonth,
    days,
    goToPreviousMonth,
    goToNextMonth,
  } = useCalendar()

  return (
    <div className="calendar">
      <CalendarHeader
        year={currentYear}
        month={currentMonth}
        onPrev={goToPreviousMonth}
        onNext={goToNextMonth}
      />

      <CalendarGrid days={days} />
    </div>
  )
}

export default Calendar

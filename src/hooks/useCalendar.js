import { useState } from 'react'
import { generateMonthDays } from '../utils/dateUtils'
import { BASE_SCHEDULE } from '../utils/scheduleRules'

export function useCalendar() {
  const today = new Date()

  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())

  // Genera los días del mes con persona asignada
  const days = monthDays.map(day => {
  const weekKey = getWeekKey(day.date)
  const baseAssignment = BASE_SCHEDULE[day.dayOfWeek]

  // Si no es jueves, usar asignación base
  if (baseAssignment !== 'comodin') {
    return {
      ...day,
      assignedTo: baseAssignment,
    }
  }

  // Jueves: siempre reasignado
  const francoDate = francosByWeek[weekKey]
  const displaced = getDisplacedPerson(francoDate.getDay())

  return {
    ...day,
    assignedTo: displaced,
  }
})


  function goToPreviousMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(prev => prev - 1)
    } else {
      setCurrentMonth(prev => prev - 1)
    }
  }

  function goToNextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(prev => prev + 1)
    } else {
      setCurrentMonth(prev => prev + 1)
    }
  }

  return {
    currentYear,
    currentMonth,
    days,
    goToPreviousMonth,
    goToNextMonth,
  }
}

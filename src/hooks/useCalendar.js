import { useState } from 'react'
import { generateMonthDays, getWeekKey } from '../utils/dateUtils'
import {
  BASE_SCHEDULE,
  getDisplacedPerson,
} from '../utils/scheduleRules'
import { usePapaFrancos } from './useOverrides'

export function useCalendar() {
  const today = new Date()

  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())

  // Francos del papá desde Supabase (agrupados por semana)
  const francosByWeek = usePapaFrancos()

  // Días del mes
  const monthDays = generateMonthDays(currentYear, currentMonth)

  // Asignación final por día
  const days = monthDays.map(day => {
    const weekKey = getWeekKey(day.date)
    const baseAssignment = BASE_SCHEDULE[day.dayOfWeek]

    // Si no es jueves → asignación fija
    if (baseAssignment !== 'comodin') {
      return {
        ...day,
        assignedTo: baseAssignment,
      }
    }

    // Jueves → siempre reasignado según franco del papá
    const francoDate = francosByWeek[weekKey]

    if (!francoDate) {
      // fallback defensivo (no debería pasar)
      return {
        ...day,
        assignedTo: 'comodin',
      }
    }

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

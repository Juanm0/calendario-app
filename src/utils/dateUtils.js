// Devuelve un objeto Date apuntando al primer día del mes
export function getStartOfMonth(year, month) {
  return new Date(year, month, 1)
}

// Devuelve la cantidad de días de un mes
export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

// Devuelve el día de la semana (0-6)
export function getDayOfWeek(year, month, day) {
  return new Date(year, month, day).getDay()
}

// Genera todos los días del mes con info básica
export function generateMonthDays(year, month) {
  const daysInMonth = getDaysInMonth(year, month)
  const days = []

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day)

    days.push({
      date,
      dayNumber: day,
      dayOfWeek: date.getDay(),
    })
  }

  return days
}

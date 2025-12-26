// Días de la semana
// 0: Domingo | 1: Lunes | 2: Martes | 3: Miércoles | 4: Jueves | 5: Viernes | 6: Sábado

export const PEOPLE = {
  YO: 'yo',
  HERMANO: 'hermano',
  MAMA: 'mamá',
  PAPA: 'papá',
}

export const BASE_SCHEDULE = {
  0: PEOPLE.MAMA,
  1: PEOPLE.HERMANO,
  2: PEOPLE.HERMANO,
  3: PEOPLE.YO,
  4: 'comodin', // Jueves: SIEMPRE se reasigna
  5: PEOPLE.YO,
  6: PEOPLE.MAMA,
}

export function getDisplacedPerson(dayOfWeek) {
  if ([1, 2].includes(dayOfWeek)) return PEOPLE.HERMANO
  if ([3, 5].includes(dayOfWeek)) return PEOPLE.YO
  if ([0, 6].includes(dayOfWeek)) return PEOPLE.MAMA
  return null
}


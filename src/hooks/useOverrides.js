import { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'
import { getWeekKey } from '../utils/dateUtils'

export function usePapaFrancos() {
  const [francosByWeek, setFrancosByWeek] = useState({})

  useEffect(() => {
    async function fetchFrancos() {
      const { data, error } = await supabase
        .from('papa_francos')
        .select('*')

      if (error) {
        console.error('Error cargando francos:', error)
        return
      }

      const grouped = {}

      data.forEach(item => {
        const date = new Date(item.fecha)
        const weekKey = getWeekKey(date)
        grouped[weekKey] = date
      })

      setFrancosByWeek(grouped)
    }

    fetchFrancos()
  }, [])

  return francosByWeek
}
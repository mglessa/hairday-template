import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay({ date }) {
  try {
    // Fazendo a requisição
    const response = await fetch(`${apiConfig.baseUrl}/schedules`)
    const data = await response.json()

    // Filtrando os agendamentos
    const dailySchedules = data.filter(schedule => dayjs(date).isSame(schedule.when, 'day'))

    return dailySchedules
  } catch (error) {
    console.error('Error fetching schedules', error)
    alert('Não foi possível buscar os agendamentos. Tente novamente mais tarde.')
  }
}
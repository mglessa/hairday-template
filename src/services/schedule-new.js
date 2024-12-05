import { apiConfig } from './api-config.js'

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, when }),
    })

    alert("Agendamento realizado com sucesso!")

  } catch (error) {
    console.error('Error creating schedule', error)
    alert('Não foi possível realizar o agendamento. Tente novamente mais tarde.')
  }
}
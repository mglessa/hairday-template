import { scheduleCancel } from '../../services/schedule-cancel.js'
import { schedulesDay } from '../schedules/load.js'

const periods = document.querySelectorAll('.period');

// Gera evento de click para cada lista
periods.forEach((period) => {
  period.addEventListener('click', async (event) => {
    if (event.target.classList.contains('cancel-icon')) {
      // Obtém a li pai do elemento clicado
      const item = event.target.closest('li');

      // Obtém o id do agendamento
      const { id } = item.dataset;

      // Confirma que o id foi selecionado
      if (id) {
        // Confirma se o usuário deseja cancelar o agendamento
        const isConfirm = confirm('Tem certeza que deseja cancelar este agendamento?');

        if (isConfirm) {
          // Cancela o agendamento
          await scheduleCancel({ id });

          // Recarrega os agendamentos
          schedulesDay();
        }
      }
    }
  })
});
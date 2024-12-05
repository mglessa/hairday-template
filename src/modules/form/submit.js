import dayjs from 'dayjs';
import { scheduleNew } from '../../services/schedule-new.js'
import { schedulesDay } from '../schedules/load.js'

const form = document.querySelector('form');
const clientName = document.querySelector('#client')
const selectedDate = form.querySelector('#date');

const today = dayjs().format('YYYY-MM-DD');

// Carrega a data atual e define a data mínima
selectedDate.value = today;
selectedDate.min = today;

// Lida com o envio do formulário
form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim();

    if (!name) {
      return alert('Informe o nome do cliente!');
    }

    // Recupera o horário selecionado
    const hourSelected = form.querySelector('.hour-selected');

    if (!hourSelected) {
      return alert('Selecione um horário!');
    }

    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(':');

    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, 'hour');

    // Gera um ID
    const id = new Date().getTime();

    // Faz o agendamento
    await scheduleNew({ id, name, when });

    // Recarrega os agendamentos
    await schedulesDay();

    // Limpa o input de nome
    clientName.value = '';

  } catch (error) {
    alert('Não foi possível realizar o agendamento.');
    console.error(error);
  }
};
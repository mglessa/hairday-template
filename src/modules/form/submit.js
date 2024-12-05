import dayjs from 'dayjs';

const form = document.querySelector('form');
const selectedDate = form.querySelector('#date');

const today = dayjs().format('YYYY-MM-DD');

// Carrega a data atual e define a data mínima
selectedDate.value = today;
selectedDate.min = today;

// Lida com o envio do formulário
form.onsubmit = (event) => {
  event.preventDefault();

  console.log('enviado');
};
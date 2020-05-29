const { getNavLinksAndAddEvent, toggleDisabledIfCheckedChb } = require('./js/helpers/dom');
const { sendDataIfValid } = require('./js/helpers/api').sendDataIfValid
import './../css/style.css';

window.onload = () => {
  getNavLinksAndAddEvent();
  toggleDisabledIfCheckedChb();

  document.getElementById("btnRegister").addEventListener('click', sendDataIfValid);
}
import { getNavLinksAndAddEvent, toggleButtonDisabledIfCheckedConditions } from './js/helpers/dom';
import { sendDataIfValid } from './js/helpers/api';
import './css/style.css';
import './css/nav.css';
import './css/form.css';
import './css/spinner.css';
// import './../index.html';

window.onload = () => {
  getNavLinksAndAddEvent();
  toggleButtonDisabledIfCheckedConditions();
  document.getElementById("btnRegister").addEventListener('click', sendDataIfValid);
}
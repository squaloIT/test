import { getNavLinksAndAddEvent, toggleButtonDisabledIfCheckedConditions } from './js/helpers/dom';
import { sendDataIfValid } from './js/helpers/api';

window.onload = () => {
  getNavLinksAndAddEvent();
  toggleButtonDisabledIfCheckedConditions();
  document.getElementById("btnRegister").addEventListener('click', sendDataIfValid);
}
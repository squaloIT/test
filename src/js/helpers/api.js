const { getCurrency, checkFormValidity } = require('./validations');
import { isEmailInvisible } from './dom';
import { hideSpinner, showSpinner } from './spinner-functions';

const sendDataIfValid = () => {
  showSpinner();
  if (checkFormValidity()) {
    const data = {
      currency: getCurrency(),
      isNotification: document.getElementById("promo-notifications").checked
    };

    if (isEmailInvisible()) {
      data.telephone = document.getElementById("tbTelephone").value
    } else {
      data.email = document.getElementById("tbEmail").value
    }

    send(data);
  } else {
    hideSpinner();
  }

}

const send = (data) => {
  setTimeout(() => { //JUST TO SIMULATE SLOWER NETWORK REQUEST FOR YOU TO SEE THE LOADER :)
    registerUser(data)
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        //CUZ OF CONSTANT FAIL OF REQUEST I WILL PLACE DISPLAYING OF SUCCESS MESSAGE IN CATCH BUT IT SHOULD BE HERE.
        displaySuccessMessage();

      })
      .catch((error) => {
        console.error('Error:', error);
        displaySuccessMessage();

      });
    hideSpinner();
  }, 1000);
}

const displaySuccessMessage = () => {
  document.getElementById("registration-form").classList.add("div--display-none")
  document.getElementById("message").classList.remove("div--display-none")
}

const registerUser = (data) => fetch('https://test.com', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

export { sendDataIfValid };

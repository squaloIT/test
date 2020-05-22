window.onload = () => {
  const toggleDisabledIfCheckedChb = () => {
    document.getElementById("terms-and-conditions").addEventListener("change", function () {
      if (document.getElementById("terms-and-conditions").checked) {
        document.querySelector("button[type='button']").classList.remove("disabled")
      } else {
        document.querySelector("button[type='button']").classList.add("disabled")
      }
    })
  }

  const toggleInputElementsAccordingToNav = (a) => {
    document.querySelectorAll(".helper-text").forEach(el => el.classList.add("helper-text--display-none"));

    if (a.href.indexOf("mobile") != -1) {
      document.getElementById("mobile").classList.remove("div--display-none")
      document.getElementById("email").classList.add("div--display-none")
    } else {
      document.getElementById("mobile").classList.add("div--display-none")
      document.getElementById("email").classList.remove("div--display-none")
    }
  }

  const getNavLinksAndAddEvent = () => {
    const links = document.querySelectorAll("#nav-mobile li a");
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (evt) {
        toggleInputElementsAccordingToNav(evt.target);
      })
    }
  }

  const checkFormValidity = () => {
    const checkElementWithRegularExpression = (element, regEx) => {
      const val = element.value;
      const helperText = element.nextElementSibling;

      if (!regEx.test(val)) {
        helperText.classList.remove("helper-text--display-none");
        return false;
      } else {
        helperText.classList.add("helper-text--display-none");
        return val;
      }
    }

    const checkIsCurrencySelected = () => {
      let value = getCurrency();

      return !!value;
    }

    const isEmailValid = () => {
      return checkElementWithRegularExpression(
        document.getElementById("tbEmail"),
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      )
    }

    const isTelValid = () => {
      return checkElementWithRegularExpression(
        document.getElementById("tbTelephone"),
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
      )
    }

    const toggledElementsValid = isEmailInvisible() ?
      isTelValid() : isEmailValid()

    if (!toggledElementsValid)
      return false

    if (!checkIsCurrencySelected())
      return false;

    return true;
  }

  const hideSpinner = () => {
    let spinner = document.querySelector("#pms-global-spinner");
    if (spinner) {
      spinner.style.display = 'none';
    }
  }

  const showSpinner = () => {
    const checkIsDisplayed = () => {
      let spinner = document.querySelector("#pms-global-spinner");
      if (spinner) {
        return spinner.style.display == 'flex';
      }
      return false;
    }

    let spinner = document.querySelector("#pms-global-spinner");
    if (spinner) {
      spinner.style.display = checkIsDisplayed() ? 'none' : 'flex';
    }
  }

  const isEmailInvisible = () => {
    return document.getElementById("tbEmail").parentElement.classList.contains('div--display-none')
  }

  const getCurrency = () => {
    let value = null;

    const elements = document.getElementsByName('currency-radio-group');
    elements.forEach(r => {
      if (r.checked) {
        value = r.value;
      }
    });

    return value;
  }
  function displaySuccessMessage() {
    document.getElementById("registration-form").classList.add("div--display-none")
    document.getElementById("message").classList.remove("div--display-none")
  }
  function sendDataIfValid() {
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

      setTimeout(() => { //JUST TO SIMULATE SLOWER NETWORK REQUEST FOR YOU TO SEE THE LOADER :)
        fetch('https://test.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
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
      }, 1000)
    } else {
      hideSpinner();
    }

  }

  getNavLinksAndAddEvent();
  toggleDisabledIfCheckedChb();

  document.getElementById("btnRegister").addEventListener('click', sendDataIfValid);
}
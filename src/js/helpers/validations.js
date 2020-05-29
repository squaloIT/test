import { isEmailInvisible } from './dom';

const checkFormValidity = () => {
  const toggledElementsValid = isEmailInvisible() ?
    isTelValid() : isEmailValid()

  if (!toggledElementsValid)
    return false

  if (!checkIsCurrencySelected())
    return false;

  return true;
}

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

export {
  checkFormValidity,
  getCurrency
}

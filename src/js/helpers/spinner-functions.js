const hideSpinner = () => {
  let spinner = document.querySelector("#pms-global-spinner");
  if (spinner) {
    spinner.style.display = 'none';
  }
}

const showSpinner = () => {
  let spinner = document.querySelector("#pms-global-spinner");
  if (spinner) {
    spinner.style.display = checkIsDisplayed() ? 'none' : 'flex';
  }
}

const checkIsDisplayed = () => {
  let spinner = document.querySelector("#pms-global-spinner");
  if (spinner) {
    return spinner.style.display == 'flex';
  }
  return false;
}



export {
  showSpinner,
  hideSpinner
}
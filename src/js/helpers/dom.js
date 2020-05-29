const isEmailInvisible = () => {
  return document.getElementById("tbEmail").parentElement.classList.contains('div--display-none')
}

const toggleButtonDisabledIfCheckedConditions = () => {
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


export {
  isEmailInvisible,
  getNavLinksAndAddEvent,
  toggleButtonDisabledIfCheckedConditions
}
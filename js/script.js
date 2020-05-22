window.onload = () => {
  alert("sdasda")
  const toggleDisabledIfCheckedChb = () => {
    document.getElementById("terms-and-conditions").addEventListener("change", function () {
      if (document.getElementById("terms-and-conditions").checked) {
        document.querySelector("button[type='submit']").classList.remove("disabled")
      } else {
        document.querySelector("button[type='submit']").classList.add("disabled")
      }
    })
  }

  const toggleInputElementsAccordingToNav = (a) => {
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

  function checkElementWithRegularExpression(element, regEx) {

    const val = element.value;

    if (!regEx.test(val)) {
      imePrezimeElement.style.border = "1px solid red";
      return false;
    } else {
      imePrezimeElement.style.border = "1px solid #CCC";
      return imePrezimeVal; //Vracamo vrednost promenljive pozivaocu
    }
  }

  getNavLinksAndAddEvent();
  toggleDisabledIfCheckedChb();
  // toggleInputElementsAccordingToNav();
}
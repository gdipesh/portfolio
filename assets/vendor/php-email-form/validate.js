
"use strict";
const form = document.getElementById("contact-form");
const action = form.getAttribute("action");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // let thisForm = this;

        
        document.querySelector(".loading").classList.add("d-block");
        document.querySelector(".error-message").classList.remove("d-block");
        document.querySelector(".sent-message").classList.remove("d-block");
  const t = new FormData(form),
    s = new XMLHttpRequest();
  s.open("POST", action),
    s.setRequestHeader("Accept", "application/json"),
    (s.onload = () => {
      200 === s.status
        ? (document.querySelector(".loading").classList.remove("d-block"),
          document.querySelector(".sent-message").classList.add("d-block"),
          form.reset())
        : (document.querySelector(".loading").classList.remove("d-block"),
         
          document.querySelector(".error-message").innerHTML =`something went wrong error code ${ s.status}`,
          document.querySelector(".error-message").classList.add("d-block"));
    }),
    s.send(t);
});

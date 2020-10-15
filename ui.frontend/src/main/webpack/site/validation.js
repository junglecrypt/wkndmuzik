const email = document.querySelector('input[type="email"]');
email.addEventListener('focus', (event) => {
  event.target.classList.remove('error-message');
  var element = document.getElementById('constraintmsg');
  if(element){
    element.parentElement.removeChild(element);
  }
});

email.addEventListener('blur', (event) => {
  if (event.target.validity.typeMismatch){
    event.target.classList.add('error-message');
      var errormessage = document.createElement("div");
      errormessage.classList.add('constraint-message');
      errormessage.setAttribute("id","constraintmsg");
      var text = document.createTextNode(event.target.parentElement.getAttribute('data-cmp-constraint-message'));
      errormessage.appendChild(text);
    event.target.parentElement.appendChild(errormessage);
  }
});

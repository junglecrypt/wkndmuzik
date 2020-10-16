function focusElement(event) {
  event.classList.remove('error-message');
  var element = event.parentElement.querySelector('#constraintmsg');
  if(element){
    event.parentElement.removeChild(element);
  }
}
function validateElement(event) {
  var eventparent = event.parentElement;
  if (event.validity){
    var errormessage = document.createElement("div");
    errormessage.classList.add('constraint-message');
    errormessage.setAttribute("id","constraintmsg");
    if (event.validity.valueMissing){
      event.classList.add('error-message');
      errormessage.appendChild(document.createTextNode(eventparent.getAttribute('data-cmp-required-message')));
    }
    if (event.validity.typeMismatch){
      event.classList.add('error-message');
      errormessage.appendChild(document.createTextNode(eventparent.getAttribute('data-cmp-constraint-message')));
   }
     eventparent.appendChild(errormessage);
 }
}

const text = document.querySelectorAll('input[type="text"], input[type="email"],input[type="tel"]');
for (i = 0; i < text.length; i++)
  {
    text[i].addEventListener('focus', (event) => { focusElement(event.target);});
    text[i].addEventListener('blur', (event) => { validateElement(event.target);});
  }

const submit = document.querySelector('button[type="SUBMIT"]');
  submit.addEventListener('click', (event) => {
    const inputField = event.target.parentElement.parentElement.getElementsByTagName('input');
    for (i = 0; i < inputField.length; i++)
    {
      focusElement(inputField[i]);
      validateElement(inputField[i]);
    }
  });

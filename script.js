let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let email = document.querySelector('#email');
let enquiry = document.querySelector('#enquiry');
let support = document.querySelector('#support');
let input = document.querySelectorAll('input[type="text"]');
let textarea = document.querySelector('textarea');
let consent = document.querySelector('#consent');
let msg = document.querySelectorAll('.msg');
let form = document.querySelector('form');
let submitMsg = document.querySelector(".submissionMsg");


form.addEventListener("submit", function (e) {
  e.preventDefault();

  nameValidator(firstName.value, lastName.value);
  emailValidator(email.value);
  queryValidator(enquiry.checked, support.checked);
  messageValidator(textarea.value);
  consentValidator(consent.checked);

  if (
    firstName.value !== "" &&
    lastName.value !== "" &&
    email.value !== "" &&
    (enquiry.checked || support.checked) &&
    textarea.value !== "" &&
    consent.checked
  ) {
    msgDisplay();
    setTimeout(() => {
      form.submit();
    }, 2000);
  }
});

function msgDisplay() {
  submitMsg.style.opacity = "1";
  setTimeout(() => {
    submitMsg.style.opacity = "0";
  }, 4000); 
}


function nameValidator(firstName, lastName) {
    if (firstName == '') {
        msg[0].classList.add('display');
        input[0].classList.add('redborder');
    }
    else{
        msg[0].classList.remove('display');
        input[0].classList.remove('redborder');
    }
    if (lastName == '') {
        msg[1].classList.add('display');
                input[1].classList.add("redborder");
    }
    else {
        msg[1].classList.remove('display');
                input[1].classList.remove("redborder");
    }
}

function emailValidator(email) {
        if (email == "") {
            msg[2].classList.add("display");
            input[2].classList.add("redborder");
        } else {
          msg[2].classList.remove("display");
             input[2].classList.remove("redborder");
        }
}

function queryValidator(enquiry, support) {
    if (enquiry + support < 1) {
        msg[3].classList.add('display')
    }
    else {
        msg[3].classList.remove('display')
    }
}

function messageValidator(message) {
    if (message == "") {
        msg[4].classList.add("display");
        textarea.classList.add("redborder");
    } else {
        msg[4].classList.remove("display");
        textarea.classList.remove("redborder");
    }
}

function consentValidator(consent) {
    console.log(consent);
    
    if (consent === false) {  
        msg[5].classList.add("display");
    } else {
        msg[5].classList.remove("display");
    }
}
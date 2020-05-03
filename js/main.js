const navBtn = document.querySelector(".nav-btn");
const hamburger = document.querySelector(".nav-btn__burger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-menu__item");

let showMenu = false;

navBtn.addEventListener("click", () => {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    navMenu.classList.add("open");
    navItems.forEach(item => item.classList.add("open"));

    showMenu = true;
  }
  else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    navMenu.classList.remove("open");
    navItems.forEach(item => item.classList.remove("open"));

    showMenu = false;
  }
});

// Contact mail stmp
const form = document.querySelector(".contact__form");
if (form != null) {
  const sendMailBtn = document.querySelector(".contact__form-btn");
  const iname= document.querySelector(".input-name");
  const iemail= document.querySelector(".input-email");
  const isubject= document.querySelector(".input-subject");
  const imessage= document.querySelector(".input-message");

  form.onsubmit = function(){
    let check = true;
    if (iname.value.trim() == '') {
      showWarning(iname);
      check = false;
    }
    if (iemail.value.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
      showWarning(iemail);
      check = false;
    }
    if (isubject.value.trim() == '') {
      showWarning(isubject);
      check = false;
    }
    if (imessage.value.trim() == '') {
      showWarning(imessage);
      check = false;
    }

    if (check) {
      sendMail();
      return false;
    } else {
      return check;
    }
  };

  document.querySelectorAll(".input").forEach(function(input) {
    input.onfocus = function() {
      hideWarning(input);
    };
  });

  showWarning = function(input) {
    input.classList.add('bg-danger');
  }

  hideWarning = function(input) {
    input.classList.remove('bg-danger');
  }

  function sendMail() {
    Email.send({
      Host : "smtp.mailtrap.io",
      Username : "edd2667e71e20b",
      Password : "fac0314a39a17e",
      To : "destiny@mail.com",
      From : 'source@mail.com',
      Subject : "Test Email",
      Body : `<html><h2>Subject: ${isubject.value}</h2><h3>Name: ${iname.value}</h2><h4>Email: ${iemail.value}</h4><p>${imessage.value}</p></html>`
    }).then(
      message => alert('Mail sent successfully.')
    );
    return true;
  }
}

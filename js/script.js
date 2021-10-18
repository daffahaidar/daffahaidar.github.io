// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

//Server Time
function showTime() {
  var a_p = "";
  var today = new Date();
  var curr_hour = today.getHours();
  var curr_minute = today.getMinutes();
  var curr_second = today.getSeconds();
  
  var date = new Date();
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var curr_day = date.getDate();
  var month = date.getMonth();
  var curr_year = date.getFullYear();

  curr_hour = checkTime(curr_hour);
  curr_minute = checkTime(curr_minute);
  curr_second = checkTime(curr_second);
 

  document.getElementById("clock").innerHTML =
    curr_hour +
    ":" +
    curr_minute +
    ":" +
    curr_second +
    " " +
    a_p;

    document.getElementById("date").innerHTML =
    curr_day +
    " " +
    months[month] +
    " " +
    curr_year +
    " " +
    a_p;

}

function checkTime(i) {
  if (i < 10) {
    i = "0" +i;
  }
  return i;
}
setInterval(showTime, 500);



// Greeting
var h=(new Date()).getHours();
var m=(new Date()).getMinutes();
var s=(new Date()).getSeconds();
if (h >= 4 && h < 10) document.getElementById("time").innerHTML = 'Hello, Good Morning! <i class="fas fa-cloud-sun"></i>';
if (h >= 10 && h < 15) document.getElementById("time").innerHTML = 'Hello, Good Afternoon! <i class="fas fa-sun"></i>';
if (h >= 15 && h < 18) document.getElementById("time").innerHTML = 'Hello, Good Evening! <i class="fas fa-cloud-moon"></i>';
if (h >= 18 || h < 4) document.getElementById("time").innerHTML = 'Hello, Good Night! <i class="fas fa-moon"></i>';

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflowX = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

var typed = new Typed(".typing", {
  strings: [
    '<i class="fas fa-graduation-cap"></i> Binus University Student',
    '<i class="fab fa-google"></i> Member GDSC ITB',
    '<i class="fas fa-palette"></i> Graphic Designer',
    '<i class="fas fa-gamepad"></i> Gamers'
  ],
  typeSpeed: 50,
  backSpeed: 40,
  loop: true
});

//Regex validation
function verification(regex, input, helpId, helpMessage){
  if(!regex.test(input)) {
    if (helpId != null)
      while (helpId.childNodes[0]){
        helpId.removeChild(helpId.childNodes[0]);
      }
      helpId.appendChild(document.createTextNode(helpMessage));
  }else{
      if (helpId != null){
        while (helpId.childNodes[0]){
          helpId.removeChild(helpId.childNodes[0]);
        }
      }
  }
}

//Form validation for name
function verifyName(inputField, helpId) {
  return verification(/^[A-Za-z\.\' \-]{1,15}\s?[A-Za-z\.\' \-]{1,15}\s?[A-Za-z\.\' \-]{1,15}/,
  inputField.value, helpId,
  "Please enter a valid name!");
}
//Form validation for email
function verifyEmail(inputField, helpId) {
  return verification(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, 
    inputField.value, 
    helpId,
    "Please enter a valid email!");
}

//Submit Validation
var submit = document.getElementById('saveButtonId');
submit.onclick = function(){
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var cust = {
    name: name,
    email: email,
  };
  //Kondisi dimana setiap element form tidak diisi sama sekali
  if(cust.email==="" && cust.name===""){
    document.getElementById("email_help").innerHTML = "Please enter your email";
    document.getElementById("name_help").innerHTML = "Please enter your name";
  }else if(cust.email === ""){
    document.getElementById("email_help").innerHTML = "Please enter your email";
  }else if(cust.name === ""){
    document.getElementById("name_help").innerHTML = "Please enter your name";
  }
  //Kondisi dimana setiap form sudah diisi kemudian d submit
  else{
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzubFCv_Lu_jTNFBXRKls3MyAGLCmcyTHJmlX1TKAXhHSUQY4qPEq0aeZEb5dH1FTRM/exec'
  const form = document.forms['myprofile-contact-form']
  

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        alert("Email kamu sudah dikirimkan");
        form.reset();
        console.log('Success!', response);
      })
      .catch(error => console.error('Error!', error.message))
  })
   
  }
  
}




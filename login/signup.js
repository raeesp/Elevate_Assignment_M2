function checkForm() { const message = document.getElementById('message');
const fname = document.getElementById('fname').value;
const lname = document.getElementById('lname').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

message.style.display = "none";

if (fname.length == 0) {
    message.innerText = "Please enter your First Name";
    message.style.display = "block";
    return false;
}

if (lname.length == 0) {
    message.innerText = "Please enter your Last Name";
    message.style.display = "block";
    return false;
}

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,30}$/;

if (!passwordPattern.test(password)) {
  message.innerText = "Password must meetMinimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
  message.style.display = "block";
  return false;
} 

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false)
{message.innerText = "Please enter Valid Email Address!";
message.style.display = "block";
return false;
}

alert("Success");
location.href = "/index.html"
document.getElementById("loginnav").innerHTML = "Logout";
return false;



}
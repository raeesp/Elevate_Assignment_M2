function checkForm() { const message = document.getElementById('message');

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

message.style.display = "none";

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false)
{message.innerText = "Please enter Valid Email Address!";
message.style.display = "block";
return false;
}

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,30}$/;

if (!passwordPattern.test(password)) {
  message.innerText = "inValid Password";
  message.style.display = "block";
 

} 


alert("Success");
location.href = "/index.html"
document.getElementById("loginnav").innerHTML = "Logout";
return false;


}


function errorMessage(){
    var error = document.getElementById("error")
    var name = document.getElementById("name")
    if((document.getElementById("name").value)=="")
    {
        error.innerHTML = "please enter a name"
        error.style.display="block"
        error.style.cssText+="color: red"
        name.style.cssText+="border-bottom: 3px solid red; color: red";
    }
    else if((document.getElementById("lastName").value)=="")
    {
         error2.innerHTML = "please enter last name"
         error2.style.display="block"
         error2.style.cssText+="color: red"
         lastName.style.cssText+="border-bottom: 3px solid red; color: red";
    }
    else if((document.getElementById("email").value)=="")
    {
        error3.innerHTML = "please enter your Email"
        error3.style.display="block"
        error3.style.cssText+="color: red"
        email.style.cssText+="border-bottom: 3px solid red; color: red";
    }
    else if((document.getElementById("phone").value)=="")
    {
        error4.innerHTML = "please enter phoneNumber"
        error4.style.display="block"
        error4.style.cssText+="color: red"
        phone.style.cssText+="border-bottom: 3px solid red; color: red";
    }
    else if((document.getElementById("password").value)=="" || (document.getElementById("password").length) < 8)
    {
        error5.innerHTML = "password must contain 8 character"
        error5.style.display="block"
        error5.style.cssText+="color: red"
        password.style.cssText+="border-bottom: 3px solid red; color: red";
    }
    else
      {
          error.innerHTML = ""
      }
}
const val = document.getElementById("sn")
val.addEventListener("click", (event)=>{
    event.preventDefault();
})


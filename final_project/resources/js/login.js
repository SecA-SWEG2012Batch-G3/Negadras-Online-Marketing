
  function LoginErrorUser(){
    var userErr = document.getElementById("userName").value;
    if(userErr==""){
        document.getElementById("userError").innerHTML = "please enter username";
        }
    else
        document.getElementById("userError").innerHTML = "";
}
function LoginErrorPassword(){
    var passErr = document.getElementById("passWord").value;
    if(passErr==""){
        document.getElementById("passwordError").innerHTML = "please enter passwordError";
    }
    else
        document.getElementById("passwordError").innerHTML = "";
}
//  SignUp Page
function signUpFirstErr(){
    var firstName = document.getElementById("name").value;
    if(firstName==""){
        document.getElementById("error").innerHTML = "Please Enter your firstName";
        document.getElementById("name").style.cssText=`border-bottom: 2px solid #e43838a3; width:90%; `
        return false
    }
    else{
        document.getElementById("error").innerHTML = "";
        document.getElementById("name").style.cssText=`border-bottom: 1px solid #fff;`
        return true;
    }
}
function signUpLastErr(){
    var lastName = document.getElementById("lastName").value;
    if(lastName==""){
        document.getElementById("error2").innerHTML = "Please Enter your lastName";
        document.getElementById("lastName").style.cssText=`border-bottom: 2px solid #e43838a3; width:90%;`
        return false;
    }
    else{
        document.getElementById("error2").innerHTML = "";
        document.getElementById("lastName").style.cssText=`border-bottom: 1px solid #fff;`
        return true;
    }
}
function signUpEmailErr(){
    var ch = /^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\.]+)\.([a-zA-Z]{2,5})$/
    var email = document.getElementById("email").value;
    var res = ch.test(email);
    console.log(res)
    if(res==false){
        document.getElementById("error3").innerHTML = "Please Enter your Email correctly";
        document.getElementById("email").style.cssText=`border-bottom: 2px solid #e43838a3; width:90%;`
        return false
    }
    else{
        document.getElementById("error3").innerHTML = "";
        document.getElementById("email").style.cssText=`border-bottom: 1px solid #fff;`
        return true
    }
}
function signUpPhoneErr(){
    var phoneNum = document.getElementById("Phone").value;
    if(phoneNum==""){
        document.getElementById("error4").innerHTML="please enter phone Number";
        document.getElementById("Phone").style.cssText=`border-bottom: 2px solid #e43838a3; width:90%;`
        return false
    }
    else{
        document.getElementById("error4").innerHTML="";
        document.getElementById("Phone").style.cssText=`border-bottom: 1px solid #fff;`
        return true
    }
}
function signUpErrPassword(){
    var passWord = document.getElementById("newPassword").value;
    var configPassword = document.getElementById("ConfirmPassword").value;
    if(passWord.length < 8 ){
        document.getElementById("error5").innerHTML = "password must be greater than 8 character";
        document.getElementById("newPassword").style.cssText=`border-bottom: 2px solid #e43838a3; width:90%;`
        return false
    }
    if(configPassword!=""){
        if(passWord!=configPassword){
            document.getElementById("error6").innerHTML = "password doesn't match";
            document.getElementById("ConfirmPassword").style.cssText=`border-bottom: 2px solid #e43838a3; width:90%;`
            return false
         }
         else{
            document.getElementById("error6").innerHTML = "";
            document.getElementById("ConfirmPassword").style.cssText=`border-bottom: 1px solid #fff;`
        }
    }
    if(passWord.length >= 8){
        document.getElementById("error5").innerHTML = "";
        document.getElementById("newPassword").style.cssText=`border-bottom: 1px solid #fff;`
    }
    return true
}
function ErrorMessage(){
    // LoginErrorUser();
    // LoginErrorPassword();
    // var g = document.getElementById("sn")
    
    signUpFirstErr();
    signUpLastErr();
    signUpEmailErr();
    signUpPhoneErr();
    signUpErrPassword();
    if(signUpFirstErr() && signUpLastErr() && signUpEmailErr() && signUpPhoneErr() && signUpErrPassword()){
        return true
    }
    else{
        return false
    }
}
function validateLogin(){
    let username = document.getElementById("userName").value;
    let password = document.getElementById("passWord").value;
    if(username == ""){
      document.getElementById("userError").innerHTML = "Enter username!";
      return false;
    }
    else
      document.getElementById("userError").innerHTML = "";
    if(password == ""){
      document.getElementById("passwordError").innerHTML = "Enter password!";
      return false;
    }
    else
      document.getElementById("passwordError").innerHTML = "";
    logArr = JSON.parse(localStorage.getItem("user"));
    for(var i = 0; i < logArr.length; i++){
      if(logArr[i].email == username && logArr[i].password == password){
        alert("success")
        window.localStorage.removeItem("loggedUser")
        createSession(logArr[i])
        window.location.href="./home-page.html"
        return true;
      }
    }
    alert("No Account Found. please try again!");
    return false;
  }

  function createSession(user) {
      appen=JSON.stringify(user)
      localStorage.setItem("loggedUser",appen)
  }
  
function User(firstName,lastName,phone,email,password){
    this.firstName=firstName;
    this.lastName=lastName
    this.phone=phone
    this.email=email
    this.password=password
}
  function validateSignup(){
      console.log(ErrorMessage())
      if(ErrorMessage()){
        var firstName = document.getElementById("name").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var phoneNum = document.getElementById("Phone").value;
        var passWord = document.getElementById("newPassword").value;


        var obj = new User(firstName,lastName, phoneNum, email,passWord);
        let arr = [];
        if(localStorage.key("user") != null)
        arr = JSON.parse(localStorage.getItem("user"));
        arr.push(obj);
        localStorage.setItem("user",JSON.stringify(arr));
        alert("success")
      }
  }

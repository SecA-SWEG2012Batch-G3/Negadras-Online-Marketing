<!DOCTYPE html>
<html>
    <head>
       <title>Login Form </title>
       <link rel="stylesheet" href="../../resources/css/login.css">
       <script src="../../resources/js/login.js"></script>
    </head>
    <body>
        <div class="loginbox">
            <div>
              <img src="../../resources/images/user-32-240.png" alt="">
            </div>
            <div id="content">
                <h1>Login Here</h1>
                <form action=""  class="login">
                    <p style="text-align: left;">Username</p>
                    <input type="text" name="" placeholder="Enter username" id="userName">
                    <span id="userError"></span>
                    <p style="text-align: left;">Password</p>
                    <input type="password" name="" placeholder="Enter password" id="passWord">
                    <span id="passwordError"></span>
                    <a id="button1" onclick="validateLogin()">Log In</a><br><br>
                    <a onclick="forgetpsw()" style="cursor: pointer;">Forgot password?</a><br>
                    <a href="signup.html">Don't have an account? Sign up</a>
                </form>
                <nav class="menu">
                    <ul>
                        <li><a href="./home-page.html">Home</a></li>
                        <li><a href="./services.html">Services</a></li>
                        <li><a href="./about.html">About us</a></li>
                        <li><a href="./contact.html">Contact us</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <script>
            function forgetpsw() {
                var elem=document.getElementById("content")
                var elem1=document.getElementsByClassName("loginbox")[0]
                elem1.style.cssText=`height:60vh;`
                elem.innerHTML=`
                            <h1>Find Your Account</h1>
                            <form action="">
                                <p>Please enter your email or mobile number to search for your account.</p>
                                <input type="text" name="" placeholder="Enter username or email" style="text-align:center">
                                <span id="error"></span>
                                <input type="submit" name="" value="Search"><br>
                                <input type="submit" name="" value="cancel" onclick="login()"><br>
                            </form>
                            <nav class="menu">
                                <ul>
                                    <li><a href="./home-page.html">Home</a></li>
                                    <li><a href="./Services.html">Services</a></li>
                                    <li><a href="./About.html">About us</a></li>
                                    <li><a href="./contact.html">Contact us</a></li>
                                </ul>
                            </nav>
                `
            }
            function login() {
                var elem=document.getElementById("content")
                var elem1=document.getElementsByClassName("loginbox")[0]
                elem1.style.cssText=`height:70vh;`
                elem.innerHTML=`
                <h1>Login Here</h1>
                <form action="" >
                    <p style="text-align: left;">Username</p>
                    <input type="text" name="" placeholder="Enter username">
                    <span id="error"></span>
                    <p style="text-align: left;">Password</p>
                    <input type="password" name="" placeholder="Enter password">
                    <input type="submit" name="" value="Login"><br>
                    <a onclick="forgetpsw()" style="cursor: pointer;">Forgot password?</a><br>
                    <a href="signup.html">Don't have an account? Sign up</a>
                </form>
                <nav class="menu">
                    <ul>
                        <li><a href="./home-page.html">Home</a></li>
                        <li><a href="./Services.html">Services</a></li>
                        <li><a href="./About.html">About us</a></li>
                        <li><a href="./contact.html">Contact us</a></li>
                    </ul>
                </nav>
                `
            }
        </script>
    </body>
</html>

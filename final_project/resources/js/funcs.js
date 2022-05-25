function errorHand(res){
    const bod =  document.body;
    bod.insertAdjacentHTML('beforeend',`<div class="error"><p style="margin-left: 70px; color:black;">${res.message}</p></div>`);
    const err = document.getElementsByClassName("error")[0];
    if(res.type=="success"){
        err.style.cssText="border-left: 6px solid #4cbe62;box-shadow: 0px 0px 30px rgba(72, 196, 94, 0.25)"
        err.innerHTML+=`<span class="iconify-inline" 
        style=" position: absolute;
                left: 8%;
                top: 33%;
                font-size: 30px;
                color: #4cbe62" data-icon="clarity:success-standard-solid"></span>`
    }
    else if(res.type=="error"){
        err.style.cssText="border-left: 6px solid #f35051; box-shadow: 0px 0px 30px #db8c8c75"
        err.innerHTML+=`<span class="iconify-inline" 
        style=" position: absolute;
                left: 8%;
                top: 33%;
                font-size: 30px;
                color: #f35051" data-icon="bx:error-circle"></span>`
    }
    setTimeout(function()
    {
        document.getElementsByClassName("error")[0].style.cssText="right: -300px;";
        document.getElementsByClassName("error")[0].remove();
    },4000);
}
function loading(act){
    if(act=="addLoad"){
        let bod= document.getElementsByClassName("backgroundBlur")[0]
        document.getElementsByClassName("backgroundBlur")[0].classList.toggle('displayBlock');
        document.getElementsByClassName("backgroundBlur")[0].classList.toggle('lightBg');
        bod.innerHTML+='<div class="loadCont"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>'

    }   
    else{
        let load = document.getElementsByClassName("loadCont")[0]
        load.remove()
        document.getElementsByClassName("backgroundBlur")[0].classList.toggle('displayBlock');
        document.getElementsByClassName("backgroundBlur")[0].classList.toggle('lightBg');
        console.log("remove")
    }
}
function showPassword(){
    var inp = document.getElementById("passwd");
    if(inp.type=="password"){
        inp.setAttribute("type","text")
    }
    else{
        inp.setAttribute("type","password")
    }
}

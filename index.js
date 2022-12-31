var username = document.getElementById("username"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    rppassword = document.getElementById("rppassword"),
    m1 = document.getElementById("m1")
    m2 = document.getElementById("m2")
    m3 = document.getElementById("m3")
    m4 = document.getElementById("m4")

    input = document.querySelector('input')

    const isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var em =re.test(email);
        return em;
    };
    const isRequired = value => value === '' ? false : true;

    const isPasswordSecure = (password) => {
        var reg=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        return password.match(reg);
    };
var flagU, flagE, flagP, flagCp = false;
username.addEventListener("input", function(){
    let a = username.value;
    if(!isRequired(a)) {
        m1.style.display = "block";
        username.style.border = "0.2px solid red";
        m1.innerHTML = "Username est obligatoire";
        
    }else if(a.length < 3 || a.length > 25){
        m1.style.display = "block";
        username.style.border = "0.2px solid red";
        m1.innerHTML = "Username comporte au moins 3 caractères et ne peut pas dépasser 25 caractères";
    }else{
        m1.style.display = "none";
        username.style.border = "0.2px solid green";
        flagU = true;
        return flagU;
   }
})

email.addEventListener("input", function(){
    let a = email.value;
    if (!isRequired(a)) {
        m2.style.display = "block";
        email.style.border = "0.2px solid red";
        m2.innerHTML = "Email est obligatoire";
    } else if (!isEmailValid(a)) {
        m2.style.display = "block";
        email.style.border = "0.2px solid red";
         m2.innerHTML = "Email doit être correspondant à un pattern RegEx : example@example.ma";
    } else {
        m2.style.display = "none";
        email.style.border = "0.2px solid green";
        flagE = true;
        return flagE;
    }
})

password.addEventListener("input", function () {
    let a = password.value;
    if (!isRequired(a)) {
        m3.style.display = "block";
        password.style.border = "0.2px solid red";
        m3.innerHTML = "Mot de passe est obligatoire";
    } else if (!isPasswordSecure(a)) {
        m3.style.display = "block";
        password.style.border = "0.2px solid red";
         m3.innerHTML = "Le mot de passe doit contenir au moins 8 caractères, dont au moins 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère spécial (!@#$%^&amp;*).";
    } else {
        m3.style.display = "none";
        password.style.border = "0.2px solid green";
        flagP = true;
        return flagP;
    }
  })

  rppassword.addEventListener("input", function () {
    let a = password.value;
    let b = rppassword.value;

    if (!isRequired(b)) {
        m4.style.display = "block";
        rppassword.style.border = "0.2px solid red";
        m4.innerHTML = "Mot de passe est obligatoire";
    } else if (b != a) {
        m4.style.display = "block";
        rppassword.style.border = "0.2px solid red";
         m4.innerHTML = "Le mot de passe de confirmation doit être le même que le mot de passe.";
    } else {
        m4.style.display = "none";
        rppassword.style.border = "0.2px solid green";
        flagCp = true;
        return flagCp;
    }
  })
  function submitCheck(){
    if(m4.style.display == "none" || m3.style.display == "none" || m2.style.display == "none" || m1.style.display == "none"){
        if(!isRequired(username) || !isRequired(email) || !isRequired(password) || !isRequired(rppassword)){
            return false
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }

  }

  document.getElementById("j").addEventListener("click", function(){
    if(flagU && flagCp && flagE && flagP){
        // let url = "\Users\THINKPAD\OneDrive\Bureau\projetfinal\index2.html"
        document.getElementById('f').setAttribute('action','index2.html')
        
    }
  })
//   function btn(){
//     document.location.href="index2.html";
//     document.location.href="index2.html";

//   }
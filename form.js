
const get_B=document.querySelector("#Submit");
const get_N=document.getElementById("Name");
const get_E=document.getElementById("Email");
const get_P=document.getElementById("Password");
const emailErr = document.getElementById("emailError");
const passErr = document.getElementById("passError");

get_B.addEventListener("click",function(e)
{
    e.preventDefault();

    const val_N=get_N.value;
    const val_E=checkEmail(get_E.value);
    const val_P=checkPassword(get_P.value);

    get_E.classList.remove("invalid");
    get_P.classList.remove("invalid");
    emailErr.textContent = "";
    passErr.textContent = "";

    if (!val_E) {
        get_E.classList.add("invalid");
        emailErr.textContent = "Enter a valid Gmail address (e.g. name@gmail.com)";
    }

    if (!val_P) {
        get_P.classList.add("invalid");
        passErr.textContent = "Min 8 characters, with uppercase, lowercase, number & special character";
    }

    if( val_E && val_P)
    {
        fetch('http://localhost:8000/register',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                name:val_N,
                email:get_E.value,
                password:get_P.value
            })
        })
        .then(res => {
            if(!res.ok)
            {
                return res.json().then(errData => {
            throw new Error(errData.detail || "Signup failed");
            });
            }
            return res.json();
        })
        .then(data => {
            console.log("Success:",data);
            window.alert("Registered Successfully");
            get_N.value = "";
            get_E.value = "";
            get_P.value = "";
        })
        .catch(err => {
            console.error(err);
            window.alert(err.message);
        })
    }
});

function checkEmail(email)
{
    return email.includes('@gmail.com');
}

function checkPassword(pass)
{
    const sp_char=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return sp_char.test(pass);
}

const toggle_pass=document.getElementById("toggle");

toggle_pass.addEventListener("click", function()
{
    if(get_P.type === "password")
    {
        get_P.type="text";
        toggle_pass.classList.remove("glyphicon-eye-open");
        toggle_pass.classList.add("glyphicon-eye-close");
    }
    else
    {
        get_P.type="password";
        toggle_pass.classList.remove("glyphicon-eye-close");
        toggle_pass.classList.add("glyphicon-eye-open");
    }
});


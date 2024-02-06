const name = document.getElementById('na')
const email = document.getElementById("em")
const pwd = document.getElementById("pwd")
const cpwd = document.getElementById("cpwd")
const Rform= document.getElementById("regForm")
Rform.addEventListener('submit', regFormLogic)
let errors = 0
window.addEventListener('DOMContentLoaded', function ()
{
    let pos = window.navigator.geolocation;
    console.log(pos.getCurrentPosition((obj) =>
    {
        console.log("this is your position " + obj);
        console.log(obj)
    }))
})
let emailreg='/[A-Za-z0-9]+@[A-Za-z0-9]\.[A-Za-z]{3}/'
function regFormLogic (e)
{
    e.preventDefault();
    console.log("hello world")
    console.log(name.value, email.value, pwd.value, cpwd.value)
    if (name.value.trim() == "")
    {
        alert("name should not be empty");
        errors++;
    }
    if (emailreg.match(email.value))
    {
        alert("please enter proper email");
        errors++;
    }
    if (!(pwd.value == cpwd.value))
    {
        alert("mismatch between password and confirm password");
        errors++;
    }
    if (errors == 0)
    {
        let obj = {
            name: name.value,
            email: email.value,
            password: pwd.value,
            confirmedPassword:cpwd.value
        }
            console.log(name.value, email.value, pwd.value, cpwd.value)

        console.log(obj)
        localStorage.setItem('userDetails', JSON.stringify(obj))
        console.log("successfully registed")
        clearFields()
        window.location.href="./login.html"

    }


}
document.getElementById('e1').addEventListener('click', function ()
{
    if (pwd.type == "password")
    {
        pwd.type = "text"
        document.getElementById("e1").classList.replace("fa-eye","fa-eye-slash")
    }
    else
    {
            pwd.type = "password"
        document.getElementById("e1").classList.replace("fa-eye-slash", "fa-eye")

        }
})
function clearFields ()
{
    name.value = "";
    email.value = "";
    pwd.value = "";
    cpwd.value = "";
}
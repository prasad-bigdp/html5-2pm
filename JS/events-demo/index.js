const button = document.getElementById('btn')
const c = document.getElementById('c')
const p = document.getElementById('p')
const gp= document.getElementById('gp')
button.addEventListener('click', function (){
    alert("button got clicked")
})
c.addEventListener("click", function () {
	alert("child got clicked")
})
p.addEventListener("click", function () {
	alert("parent got clicked")
})
gp.addEventListener("click", function () {
	alert("gp got clicked")
})
const btnDiv = document.getElementById('buttons')
btnDiv.addEventListener('click', function (e)
{
	alert(e.target.textContent+" clicked")
})
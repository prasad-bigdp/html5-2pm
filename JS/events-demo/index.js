const button = document.getElementById('btn')
const c = document.getElementById('c')
const p = document.getElementById('p')
const gp= document.getElementById('gp')
button.addEventListener('click', function (){
    alert("button got clicked")
},true)
c.addEventListener("click", function () {
	alert("child got clicked")
},true)
p.addEventListener("mouuseover", function () {
	alert("parent got clicked")
},true)
gp.addEventListener("click", function () {
	alert("gp got clicked")
},true)
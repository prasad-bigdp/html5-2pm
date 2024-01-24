const count = document.querySelector('#counter>p')
let c = 0
console.log(count.textContent)
// function incr() {
// 	console.log("increement called")
// 	if (c >= 25) {
// 		alert("number should not be greater than 25")
//     }
//     else
//     {
//        c++
// 				count.textContent = c
//     }
		
	
// }
// function decr() {
// 	console.log("decrement called")
// 	if (c <= 0) {
// 		alert("number should not be decreased less than zero")
// 	} else {
// 		c--
// 		count.textContent = c
// 	}
// }
// function reset() {
// 	console.log("reset called")
// 	count.textContent = 0
// }
const eo = document.getElementById('eo')
if (c % 2 == 0) {
	eo.textContent == "Even"
} else {
	eo.textContent == "false"
}
function inc1 ()
{
    console.log("inc1 called")
	c = c + 2
	
 count.textContent=c
}
function inc2() {
	c += 3
	count.textContent=c
}
function inc3() {
	c += 4
count.textContent=c
}

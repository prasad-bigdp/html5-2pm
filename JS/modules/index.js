function sum(a, b) {
	return a + b
}

function sub(a, b) {
	return a - b
}
function mul(a, b) {
	return a * b
}
function div(a, b) {
	return a % b
}
let arr=["x","y",25]
let a = 55, b = 66, c = 77;
class Animal
{
    name;
    constructor(n)
    {
        this.name = n;
    }
    display ()
    {
        console.log("animal name is "+this.name)
    }
}
export { sub, mul, div, arr, a, b, c }
export default Animal

// name="prasad"
// let obj={
//     name:"raj",
//     age:25,
//     display:()=>{
//         console.log(this)
//     }
// }
// function print(a,b)
//     {
//         console.log(a+b)
//         console.log(this)
//         console.log(this.name)
//     }
//  print()

// print.call(obj,2,5)

//take an object with name,age salary and define a function to print this.name,this.salry,this.age in console. pass the object in function call
let obj = {
	name: "raj",
	age: 55,
	salary: 1000,
}
function print(a, b) {
	console.log(this.name, this.age, this.salary, a, b)
}

print.call(obj, 5, 6)
print.apply(obj, [5, 6])
let x = print.bind(obj)
console.log(x)
x()

//js is MP
export class Human {
	static a = 22
	b
	constructor(a, b) {
		this.a = a
		this.b = b
	}
	print() {
		console.log(this.a, this.b)
	}
}
export class SuperHuman extends Human {
	x
	constructor(x, a, b) {
		super(a, b)
		this.x = x
	}
}

function sum (a, b)
{
    return a+b
}
function sub(a, b) {
	return a - b
}
function mul(a, b) {
	return a * b
}
export default sum
export {sub,mul}


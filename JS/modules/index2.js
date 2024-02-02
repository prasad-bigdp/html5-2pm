import * as x from './index.js'
import Animal from './index.js'

let { a, b, c } = x;//object destructuring
function sum (b, c, d, ...a)
{
    const x = [10,2,...a,5];
	console.log(a)
}
console.log(sum(2,3,4,5,6,7))
console.log(x.sub(2, 3))
console.log(x.mul(2, 3))
console.log(x.div(2, 3))
console.log(a, b, c)
let obj = new Animal("Dog")
obj.display()
console.log(x.arr)
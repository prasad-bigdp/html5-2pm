// let x = 5;

// while (x < 25)
// {
//     console.log(x);
//     x++;
// }
// /* even numbers from 20 to zero in reverse order */

// let x1 = 21
// while (x1 >= 0)
// {
//     if (x1 % 2 == 0) {
// 			console.log(x)
// 			x1--
// 		} else {
// 			x1--
// 		}
    
// }





// let x2 = 20
// while (x2 >= 0) {
// 	 console.log(x)
//     x2-= 2;
// }
/* print alternative letters from a given a string , use while loop */

// let str= prompt("enter a number")
//  let values=str.split('')
// // while (i < 20)
// // {
// //     console.log(i)
// //     i++;
// // }
// while (i < str.length)
// {
//     if (i % 2 == 0)
//     {
//             console.log(str[i])
//     }
//     i++;
// }

/*do ... while*/
// let i = 10000;
// do
// {
//     console.log(i);
//     i++;
// } while (i < 10);





// /*for,for..in,for...of,forEach*/
// /* standard for*/
// for (let i = 10; i <= 20; i++)
// {
//     console.log(i)
// }
// /* use standard for and print even numbers from 1 to 20 in reverse*/
// for (let i = 20; i >=1; i-=2)
// {
//     console.log(20)
// }
/* take one array and print elements of that array using standard for*/
    
// for (let i = 0; i <= arr.length-1; i++)
// {
//     console.log(arr[i])
// }
// for (let i of arr)
// {
//     console.log(i)//2 3 5...
// }
// let data = { name: "raj", age: 50, isgood: true }
// console.log(data['name'])
// for (let i in data)
// {
//     console.log(i,data[i])//0 1 2
// }

//forEach
let arr = [2, 3, 5, 7, 8, 6]
let arr2=[]
 arr.forEach(function (val)
{
arr2.push(val*3)
})
console.log(arr2)

const r= arr.map(function (val,i)
{
  return val,i
})
const f = arr.filter(function (val)
{
    return val%2==0
})
console.log(r)
console.log(f)

const re = arr.reduce(function (val,a) { return val+a }, 0)
//accumulated value
console.log(re)





















/* take a string using prompt  and print every 3rd digit  */
// saikumar

// m i

// let str = prompt("enter a string")
// str.split('').reverse().forEach(function (val,i)
// {
//     if ((i + 1) % 3 == 0)
//     {
//         console.log(val)
//     }
// })

/* map,filter , reduce*/
























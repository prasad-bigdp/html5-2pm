// const inp = prompt("Enter a value");
// if (inp % 2 === 0)
//     console.log("even")
// else
// {
//     console.log(inp%2)
//    console.log("odd")
// }
/* voter eleigibilty*/
/* take two values a and b and compare them */
// const inp1 = prompt("enter value1")
// const inp2 = prompt("enter value2")
// if (inp1 > inp2)
// {
//     console.log(inp1+"is greater than "+inp2)
// }
// else if (inp1 < inp2)
// {
//         console.log(`${inp1} is less than ${inp2}`)
// }
// else
// {
//     console.log("both are equal")
//     }



/*u have to check whether the input is male or not and whether his age is >18 or not*/
// let gen = prompt("please enter gender");
//     let age = prompt("please enter age")

// if (gen.toLowerCase() == "male" && age >= 18) {
// 	console.log("eligibile")
// } else {
// 	console.log("not eligible")
// }

/* input a number from 1-7 and print it's day of the week */
// if (day == 1) {
// 	console.log("monday")
// } else if (day == 2) {
// 	console.log("tuesday")
// } else if (day == 3) {
// 	console.log("wednesday")
// } else if (day == 4) {
// 	console.log("thursday")
// } else if (day == 5) {
// 	console.log("friday")
// } else if (day == 6) {
// 	console.log("saturday")
// } else if (day == 7) {
// 	console.log("sunday")
// }else
// {
//     console.log("wrong input")
//     }
const day = prompt("enter the day")


switch (Number(day)) {
    case 1:
        console.log("monday"); break;
    case 2:
        console.log("tuesday"); break;
    case 3:
        console.log("wednesday"); break;
    case 4:
        console.log("thursday"); break;
    case 5:
        console.log("friday"); break;
    case 6:
        console.log("saturday"); break;
    case 7:
        console.log("sunday"); break;
        default:console.log("wrong input")
}




// const inp = prompt("enter day")
// dates = [1, 2, 3, 4, 5, 6, 7]
// days = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
// if (inp == dates[0]) {
// 	console.log(days[0])
// }
// if (inp == dates[1]) {
// 	console.log(days[1])
// }
// if (inp == dates[2]) {
// 	console.log(days[2])
// }
// if (inp == dates[3]) {
// 	console.log(days[3])
// }
// if (inp == dates[4]) {
// 	console.log(days[4])
// }
// if (inp == dates[5]) {
// 	console.log(days[5])
// }
// if (inp == dates[6]) {
// 	console.log(days[6])
// }
// if (inp == dates[7]) {
// 	console.log(days[7])
// } else {
// 	console.log("enter correct date")
// }

// const a = prompt("enter the day value:")
// const days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"]
// if (a >= 1 && a <= 7) {
// 	console.log(`${a} WeakDay is ${days[a - 1]} Day`)
// }
// else
// {
//     console.log("wrong input")
//     }


/* ask teh user role( student, teacher,principal,staff)
then respond as hello result*/


const role = prompt("enter role")
switch (role) {
    case "Teacher":
        console.log("hello teacher")
        break;
	case "Principal":
		console.log("hello principal")
		break
	case "teacher":
		console.log("hello teacher")
		break
	case "staff":
		console.log("hello staff")
		break
	default:
		console.log("Wrong")
}




















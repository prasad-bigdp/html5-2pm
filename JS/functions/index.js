function sum (a, b)
{
    console.log(a+b)
}
console.log(sum)
function myLogic (fun1)
{
    fun1(2,5)
}
myLogic(sum)
const raj=function ()
{
    console.log("hi,everyone")
    return "bye"
}
console.log(raj)
const k = raj()
console.log(k)
/* counter*/
function counter ()
{
    let count = 0;
    function incr ()
    {
        count++;
        console.log(count)
    }
    return incr;
}

let r1= counter()
console.log(r1)
r1()
r1()


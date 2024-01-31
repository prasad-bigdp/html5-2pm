function fetchData ()
{
    fetch("https://dummyjson.com/recipes")
        .then((res)=>  res.json() )
        .then((data)=>console.log(data))
    .catch(()=>console.error(err))
}//promises chaining -- multiple then make the program readability difficult, it wil be solved by a modern approach async-await
async function fetchData2()
{ 
    try
    {
           const res = await fetch("https://dummyjson.com/recipes")
    console.log(res)
    const data = await res.json()
    console.log(data)
    }
    catch (err)
    {
        console.error("my error is "+err)
    }
    finally
    {
        console.log("jhgvhcxbvnxbvm")
    }
 
}
async function fetchData3 ()
{
  const data= await  axios.get("https://dummyjson.com/recipes")
 displayData(data.data)
}
fetchData()
fetchData2()
fetchData3()
const mainDiv = document.getElementById("receips")
const displayData = (data) =>
{
    console.log(data)
    data.recipes.forEach((rec) =>
    {
        const div = document.createElement('div')
        const img = document.createElement('img')
        img.src = rec.image;
        img.alt = rec.title;
        const title = document.createElement('h2')
        title.textContent = rec.title
        const ingredients = document.createElement('p')
        ingredients.textContent ="Ingredients: "+ rec.ingredients.map((value) => value)
        const instructions = document.createElement('p');
        instructions.textContent ="Instructions to prepeare: " +rec.instructions.map((value) => value)
        div.append(img, title, ingredients, instructions)
        div.classList.add('receipe')
        mainDiv.appendChild(div)
    })
}
const md = document.getElementById('modal')
// const btn = document.querySelector('#btn')
 const closeBtn= document.querySelector('#close')
function openModal()
{
    md.style.display = 'block'
    document.body.style.backgroundColor="rgba(0,0,0,0.4)"
}
function closeModal ()
{
    md.style.display = "none"
    document.body.style.backgroundColor = "rgba(25, 65, 25, 0.4)"
    closeBtn.classList.add('close')
}
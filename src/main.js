import './style.css'

const Screen1 = document.getElementsByClassName("tvLens")[0]
const Screen2 = document.getElementsByClassName("tvLens")[1]
const Equal = document.querySelector('.equalSign')
const Buttons = document.querySelectorAll('[value]');
const Del = document.querySelector(".Del")


Buttons.forEach((bud, ind)=>{
    bud.addEventListener("click", ()=>{
        Screen1.innerHTML += bud.value
    })
})
Equal.addEventListener('click', ()=>{
    if(Screen1.innerHTML == '') return;
    const Input = Screen1.innerHTML;
    Screen2.innerHTML = eval(Input);
})
Del.addEventListener('click', ()=>{
    const remove = Screen1.innerHTML.slice(0, -1)
    Screen1.innerHTML = remove;
})
Del.addEventListener('dblclick', ()=>{
    Screen1.innerHTML = ''
    Screen2.innerHTML = 0
})
 

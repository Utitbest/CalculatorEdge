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

// Synchronous vs Asynchronous
 
// Synchronous;


// Asynchronous

setInterval(()=>{
    const date = new Date()
    const hours = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()
    Screen1.innerHTML = `${hours}:${min}:${sec}`
}, 1000)



const wait = (ms) => new Promise((resolve, reject) => {
    
    if (ms < 0) {
      reject(new Error("Time can't be negative"));
      return;
    }
    setTimeout(() => resolve(`Waited ${ms}ms`), ms);
});

// with .then
const loadWithThen = () => {
    console.log("1")
  wait(1000)
    .then((msg) => console.log(msg, "2"))
    .catch((err) => console.error(err));
    console.log("3")
};

// const loadWithasync = async ()=>{} // Arrow function
// async function loadWithasync(){} // Normal function



// with async and await
const loadWithAwait = async () => {
  try {
    const [reult1, result2, result3] = await Promise.allSettled([wait(1000), wait(1000), wait(1000)])

  } catch (err) {
    console.error(err);
  }finally{

  }
};
loadWithAwait()
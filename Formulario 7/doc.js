
const sup1 = document.querySelector('.sup__1');
const label__1 = document.querySelector('.label__1');
const label__11 = document.querySelector('.label__11');

const sup2 = document.querySelector('.sup__2');
const label__2 = document.querySelector('.label__2');
const label__21 = document.querySelector('.label__21');

const sup3 = document.querySelector('.sup__3');
const label__3 = document.querySelector('.label__3');
const label__31 = document.querySelector('.label__31');
const label__32 = document.querySelector('.label__32');
const label__33 = document.querySelector('.label__33');

label__1.addEventListener('click', ()=>{
    sup1.innerHTML = "Male";
});

label__11.addEventListener('click', ()=>{
    sup1.innerHTML = "Female";
});

label__2.addEventListener('click', ()=>{
    sup2.innerHTML = "Spayed";
});

label__21.addEventListener('click', ()=>{
    sup2.innerHTML = "Neutered";
});

label__3.addEventListener('click', ()=>{
    sup3.innerHTML = "0-25 lbs";
});

label__31.addEventListener('click', ()=>{
    sup3.innerHTML = "25-50 lbs";
});

label__32.addEventListener('click', ()=>{
    sup3.innerHTML = "50-100 lbs";
});

label__33.addEventListener('click', ()=>{
    sup3.innerHTML = "100+ lbs";
});
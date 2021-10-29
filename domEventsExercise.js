// 1
const button1 = document.getElementById('one');
button1.onclick = () => alert("Cool! You can hear/understand a hummingbird and ants");

// 2
const button2 = document.getElementById('h3');
button2.addEventListener('hover'), () => alert("OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one");

// 3
const form = document.querySelector('form');
form.addEventListener('submit', () => {
    // p.preventDefault();
    const username = form.elements.username.value
    const input = document.querySelector('input');
    input.innerText = `${username}`;
    alert(`${username}`);
})

// 4
const darkMode = document.getElementById('dm');
const all = document.querySelectorAll('*');
darkMode.addEventListener('click', () => {
   for (element of all){
       element.classList.toggle('dark-mode')
   }
    
});

//5

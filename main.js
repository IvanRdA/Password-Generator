let rangeValue = document.getElementById('chars').value;
let value = document.getElementById('range-value');
let generate = document.getElementById('generate-btn');
let password = document.getElementById('password');
let icon = document.getElementById('icon');
let box = document.querySelector('h5');

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWZabcdefghijklmnoprstuvwxyz0123456789';

generate.addEventListener('click', (e) => {
    e.preventDefault();
    let pwd = [];

    if(document.getElementById('spec-chars').checked){
        characters += '!=@#$%&*()/<>}{[]';
    }

    for(let i = 0; i < value.value; i++){
        pwd += characters[Math.floor(Math.random() * characters.length)];
    }

    box.textContent = pwd;

    icon.addEventListener('click', (e) => {
        navigator.clipboard.writeText(pwd);
        alert('Password copied to clipboard: ' + pwd);
    });
})

value.textContent = rangeValue;
chars.addEventListener('input', (e) => {
    value.textContent = e.target.value;
});


function logSubmit(event) {
    event.preventDefault();
    const MaxNumber = document.getElementById('num-max').value;
    let random = Math.floor(Math.random() * MaxNumber);
    document.getElementById(result).innerText = random
    form.reset();
}

const form = document.getElementById('a');
form.addEventListener('submit', logSubmit);


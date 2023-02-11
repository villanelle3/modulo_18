window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    function logSubmit(event) {
        event.preventDefault();
        const MaxNumber = document.getElementById('num-max').value;
        let random = Math.floor(Math.random() * MaxNumber);
        form.reset();
        subs(random)
    }

    function subs(num){
        console.log(num)
        document.getElementById(res).innerText= num
    }
    
    const form = document.getElementById('a');
    form.addEventListener('submit', logSubmit);
});




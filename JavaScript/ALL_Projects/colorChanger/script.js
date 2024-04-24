const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');



buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click', function (e) {
        if (e.target.id === 'grey') {
            body.style.backgroundColor = 'grey';
        } else if (e.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
        }
        else {
            body.style.backgroundColor = 'yellow';
        }
    });
});
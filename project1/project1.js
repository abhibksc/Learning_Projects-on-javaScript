const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    }
     else if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }
     else if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
     else if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
  })
});

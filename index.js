const generate_input = document.getElementById('generate-input').value;
const matching_input = document.getElementById('matching-input').value;
const generate_btn = document.getElementById('generate-btn');
const button0 = document.getElementById('button0');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');
const button_delete = document.getElementById('button-delete');
const button_clear = document.getElementById('button-clear');
const submit_btn = document.getElementById('submit-btn');
document.getElementById('pin-win').style.display = 'none';
document.getElementById('pin-fail').style.display = 'none';
document.getElementById('pin-last').style.display = 'none';

var generateNumb;
var totalValue = '';
var count = 0;
var actionCount = false;


generate_btn.addEventListener('click', function () {
  const value = Math.random() * (9999 - 1000);
  generateNumb = parseInt(value) + 1000;
  console.log(value);
  console.log(generateNumb);
  document.getElementById('generate-input').value = generateNumb;
})

button0.addEventListener('click', number);
button1.addEventListener('click', number);
button2.addEventListener('click', number);
button3.addEventListener('click', number);
button4.addEventListener('click', number);
button5.addEventListener('click', number);
button6.addEventListener('click', number);
button7.addEventListener('click', number);
button8.addEventListener('click', number);
button9.addEventListener('click', number);
submit_btn.addEventListener('click', matching);
button_clear.addEventListener('click', clear);
button_delete.addEventListener('click', deleteInput);

function number(event) {
  // console.log(event.target.innerHTML);
  const keyInput = event.target.innerHTML;
  addInput(keyInput);

}

function addInput(number) {
  totalValue = totalValue + number;
  document.getElementById('matching-input').value = totalValue;
}

function matching() {
  const matchValue = document.getElementById('matching-input').value;
  console.log(matchValue);
  if (parseInt(matchValue) === generateNumb && actionCount === false) {
    // console.log('yes');
    document.getElementById('pin-win').style.display = 'block';
    document.getElementById('pin-fail').style.display = 'none';
  }
  else {
    document.getElementById('pin-fail').style.display = 'block';
    document.getElementById('pin-win').style.display = 'none';

    const tryCount = parseInt(document.getElementById('try-count').innerHTML)
    if (tryCount === 0) {
      actionCount = true;
      document.getElementById('try-count').innerHTML = 0;
      document.getElementById('pin-last').style.display = 'block';
      document.getElementById('pin-fail').style.display = 'none';
      document.getElementById('pin-win').style.display = 'none';
    }
    else
      document.getElementById('try-count').innerHTML = tryCount - 1;

  }
}

function clear() {
  document.getElementById('matching-input').value = '';
  totalValue = '';
}

function deleteInput() {
  const matchValue = document.getElementById('matching-input').value;
  const count = matchValue.length;
  document.getElementById('matching-input').value = matchValue.slice(0, count - 1);
  totalValue = matchValue.slice(0, count - 1)
  // console.log(count);
}

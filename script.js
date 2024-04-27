const numberEl = document.getElementById('number');
const buttonEl = document.getElementById('convert_button');
const resultEl = document.getElementById('result');

buttonEl.addEventListener('click', (e) => {
  e.preventDefault();
  const number = numberEl.value;
  const result = convertToRomen(number);
  resultEl.innerHTML = result;
});

function convertToRomen(number) {
  // Your code here
  if (isNaN(number)) {
    return 'Please enter a valid number';
  }
  if (number < 1 || number > 3999) {
    return 'Please enter a number between 1 and 3999';
  }
  let roman = '';
  const romanNumList = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let a;
  for (let key in romanNumList) {
    a = Math.floor(number / romanNumList[key]);
    if (a >= 0) {
      for (let i = 0; i < a; i++) {
        roman += key;
      }
    }
    number = number % romanNumList[key];
  }
  return roman;
}

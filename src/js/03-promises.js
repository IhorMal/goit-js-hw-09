
const ref = {
  form: document.querySelector('.form'),
};
let amountNumber = null;
let delayNumber = null;
let stepNumber = null;
ref.form.addEventListener('submit', (e) => {
  e.preventDefault()

  const { delay, step, amount } = e.target.elements;
  amountNumber = Number(amount.value);
  delayNumber = Number(delay.value);
  stepNumber = Number(step.value);
  console.log('amountNumber' + amountNumber)
  console.log('delayNumber' + delayNumber)
  console.log('stepNumber' + stepNumber)

  for (let i = 1; i <= amountNumber; i += 1) {
    createPromise(i, delayNumber)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delayNumber += stepNumber;
  };
});

function createPromise(position, delay) { 
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {

   timeoutId = setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      };
    }, delay);  
  });
};

console.warn('ddf')
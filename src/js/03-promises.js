import Notiflix from 'notiflix';

const ref = {
  form: document.querySelector('.form'),
};

ref.form.addEventListener('submit', (e) => {
  e.preventDefault()

  const { delay, step, amount } = e.target.elements;
  let amountNumber = Number(amount.value);
  let delayNumber = Number(delay.value);
  let stepNumber = Number(step.value);

  for (let i = 1; i <= amountNumber; i += 1) {
    createPromise(i, delayNumber)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delayNumber += stepNumber;
  };
});

function createPromise(position, delay) { 
  return new Promise((resolve, reject) => {
     const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      };
    }, delay);  
  });
};

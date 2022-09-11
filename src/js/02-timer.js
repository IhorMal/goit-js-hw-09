// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const ref = {
    datetimePicker: document.querySelector('#datetime-picker'),
    button: document.querySelector('[data-start]'),
    daysTimer: document.querySelector('[data-days]'),
    hoursTimer: document.querySelector('[data-hours]'),
    minutesTimer: document.querySelector('[data-minutes]'),
    secondsTimer: document.querySelector('[data-seconds]'),
};

let intervalId = null;
const { datetimePicker, button, daysTimer, hoursTimer, minutesTimer, secondsTimer } = ref;

button.disabled = true;

const addLeadingZero = value => String(value).padStart(2, 0);
button.addEventListener('click', () => {

})

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      
    if (selectedDates[0] < new Date()) {
        button.disabled = true;
        window.alert("Please choose a date in the future");
        return;
    }

    button.disabled = false; 

    button.addEventListener('click', taimer) 
      
    function taimer() {
      if (intervalId) return;
      
      let timeMS = selectedDates[0] - new Date(); 
      
      button.disabled = true;
      datetimePicker.disabled = true;

      intervalId = setInterval(() => {
      timeMS -= 1000;
      if (timeMS < 0) {
          clearInterval(intervalId);
          return;
      };
          
      let date = convertMs(timeMS);
      const { days, hours, minutes, seconds } = date;
      
      daysTimer.textContent = addLeadingZero(days);
      hoursTimer.textContent = addLeadingZero(hours);
      minutesTimer.textContent = addLeadingZero(minutes);
      secondsTimer.textContent = addLeadingZero(seconds);
      }, 1000); 
    };    
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const fp = flatpickr(datetimePicker, options); 



import throttle from 'lodash.throttle';

const formFeedbackEl = document.querySelector(".feedback-form");


const { email, message } = formFeedbackEl.elements;

// Зберігаю дані, що були введені в поля форми  у локальне сховище, ключем для сховища буде рядок "feedback-form-state"
const LOCALSTORAGE_KEY = "feedback-form-state";

// до форми додаємо слухача події на  SUBMIT і на  INPUT
formFeedbackEl.addEventListener("input", throttle(onInputValues, 500));

formFeedbackEl.addEventListener("submit", handleSubmit);

// В змінну отримуємо дані з локального сховища і перетворюємо в валідне значення для JS

let valuesFormSaved = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

reloadPage();


// Функція-обробник полів  INPUT та TEXTAREA
function onInputValues(event) {

event.preventDefault();
  
  valuesFormSaved = {
       email: email.value,
       message: message.value,

  };
// записуємо в локальне сховище введені в форму значення
  
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(valuesFormSaved));
}

// Функція-обробник кнопки SUBMIT

function handleSubmit(event) {

  event.preventDefault();

      
    if (email.value === "" || message.value === "") {
      
    return console.log("Please fill in all the fields!");
    }
        console.log({ email: email.value, message: message.value });     
         
    // очищуємо дані форми після відправки
    formFeedbackEl.reset();

      // очищуємо локальне сховище  
    localStorage.clear();
    
}
// ф-ія перезавантаження сторінки

function reloadPage() {

    if (valuesFormSaved) {

        email.value = valuesFormSaved.email || "";
        message.value = valuesFormSaved.message || "";
    }
   
}

import throttle from 'lodash.throttle';

const formFeedbackEl = document.querySelector(".feedback-form");
const inputFeedbackEmailEl = document.querySelector("input");
const messageFeedbackEl = document.querySelector("textarea");


const { email, message } = formFeedbackEl.elements;

// Зберігаю дані, що були введені в поля форми  у локальне сховище, ключем для сховища буде рядок "feedback-form-state"
const LOCALSTORAGE_KEY = "feedback-form-state";

// до форми додаємо слухача події на  форму
formFeedbackEl.addEventListener("submit",  throttle(handleSubmit, 500));

// В змінну отримуємо дані з локального сховища і перетворюємо в валідне значення для JS

const valuesFormSaved = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

reloadPage();

// Функція-обробник кнопки SUBMIT

function handleSubmit(event) {
    
  event.preventDefault();
 
    if (inputFeedbackEmailEl.value === "" || messageFeedbackEl.value === "") {
      
    return console.log("Please fill in all the fields!");
    }

     const arrValues = {
       email: inputFeedbackEmailEl.value,
       message: messageFeedbackEl.value,

     };
    
     // записуємо в локальне сховище введені в форму значення
  
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(arrValues));

    console.log(`Email: ${inputFeedbackEmailEl.value}, Message: ${messageFeedbackEl.value}`);
     
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

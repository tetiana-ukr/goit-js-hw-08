import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//Зберігаю час відтворення у локальне сховище, ключем для сховища буде рядок "videoplayer-current-time".
const CURRENT_TIME_KEY = "videoplayer-current-time";

//знаходимо  елемент за HTML-тегом
const iframe = document.querySelector('iframe');

// створюємо новий екземпляр плеєра
const player = new Player(iframe);

 //  Додаємо  обробник події  і відстежуємо подію timeupdate - оновлення часу відтворення.. 
player.on('timeupdate', throttle(onPlay, 1000));

  // ф-ія записуємо в локальне сховище поточний час перегляду в секундах
function onPlay({ seconds }) {
 //   
    localStorage.setItem(CURRENT_TIME_KEY, seconds);
    
}

setCurrentTime();
// отримуємо з локального сховища час і продовжуємо відтворення відео з часу зупинки
function setCurrentTime(){
    if(!localStorage.getItem(CURRENT_TIME_KEY)){
        return;
    }
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY));
}
    


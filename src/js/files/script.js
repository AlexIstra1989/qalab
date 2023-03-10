// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("DOMContentLoaded", (e)=> {

 //dom объекты элементов контроля
           var av = document.getElementById("av-tag");
           var playTime = document.getElementsByClassName("play-time")[0];
           var playBtn=document.getElementsByClassName("play-btn")[0];
           var curTime=document.getElementById("cur-time");
           var volume = document.getElementById("volume");
           var speaker=document.getElementById("speaker");
 
 //переменная для отслеживания воспроизведения звука
           var isPlaying = false;
 
           av.onloadedmetadata = function() {
             curTime.max=av.duration;
             };
             
 //функция вывода текущего времени воспроизведения
           av.ontimeupdate=function() {
             
               var sec_num = av.currentTime;
               var hours   = Math.floor(sec_num / 3600);
               var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
               var seconds = sec_num - (hours * 3600) - (minutes * 60);
               seconds=Math.round(seconds);
 
               if (hours < 10) {
                 hours   = "0"+hours;
               }
               if (minutes < 10) {
                 minutes = "0"+minutes;
               }
               if (seconds < 10) { seconds = "0"+seconds; } playTime.innerHTML = minutes+':'+seconds; 
               if(isPlaying) curTime.value=av.currentTime; 
          }; 
 //функция для настройки громкости
          volume.onchange=function() { 
 
               av.volume = volume.value/10;
          }; 
 //функция для установки начала воспроизведения
          curTime.onchange=function() { 
 
               av.pause(); av.currentTime=curTime.value; av.play(); 
          }; 
 //функция для вкл/выкл громкости
          speaker.onclick=function() { 
          
           if(volume.value==0) { 
              volume.value=10; av.volume=1;
           } else { 
              volume.value=0; av.volume=0;
           } }; 
 //функция для play/pause и изображения кнопки воспроизведения
          playBtn.addEventListener("click", (a)=> {
 
           if(isPlaying)
           {
             av.pause();
             isPlaying=false;
             playBtn.innerHTML="►";
           }
           else
           {
             av.play();
             isPlaying=true;
             playBtn.innerHTML="❚❚";
           }
           
         });
 
 
     });








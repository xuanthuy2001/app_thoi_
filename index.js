// const moument = require("./moument.js");


const AAP_ID = 'ae533b6e9d6060c84cd749ed1926a3e3';
const MAC_DINH = '--';
const city_name = document.querySelector('.city-name');
const bau_troi = document.querySelector('.weather-state');
const bieu_tuong = document.querySelector('.weather_icon');
const nhiet_do = document.querySelector('.nhiet-do-hien-tai');
const searchInput = document.querySelector("#search-input");

const MT_moc = document.querySelector(".MT_moc");
const MT_lan = document.querySelector(".MT_lan");
const Do_am = document.querySelector(".Do_am");
const Toc_do_gio = document.querySelector(".Toc_do_gio");


searchInput.addEventListener('change',(e) =>{
    console.log('[searchInput]',e)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${AAP_ID}&units=metric&lang=vi`)
    .then(async res =>{
        const data = await res.json();
        console.log('[Search Input]', data);
        city_name.innerHTML = data.name || MAC_DINH;
        bau_troi.innerHTML = data.weather[0].description || MAC_DINH;
        bieu_tuong.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        nhiet_do.innerHTML = Math.round(data.main.temp) || MAC_DINH;

     
        Do_am.innerHTML = data.main.humidity ;
        Toc_do_gio.innerHTML = (data.wind.speed*3.6).toFixed(2) ;
        MT_moc.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') ;
        MT_lan.innerHTML = moment.unix(data.sys.sunset).format('H:mm') ;
        // vì dùng await nên ta phải sử dụng asyns 
    })

})
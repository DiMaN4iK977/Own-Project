let tempDay0 = document.querySelector('.tempDay0');
let tempDay1 = document.querySelector('.tempDay1');
let tempDay2 = document.querySelector('.tempDay2');
let tempDay3 = document.querySelector('.tempDay3');
let tempNight0 = document.querySelector('.tempNight0');
let tempNight1 = document.querySelector('.tempNight1');
let tempNight2 = document.querySelector('.tempNight2');
let tempNight3 = document.querySelector('.tempNight3');
let speedWind = document.querySelector('.currentSpeedWind');
let humidity = document.querySelector('.currenHumidity');
let pressure = document.querySelector('.currentPressure');
let currentTempDay = document.querySelector('.currentTempDay');
let weatherIconToday = document.querySelector('.currentWeatherIcon');
let maxTemp = document.querySelector('.maxTempToday');
let weatherIcon = document.querySelector('.weatherIcon');
let tempFeelingToday = document.querySelector('.currentTempFeeling');
let img0 = document.querySelector('.img0');
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let todayImg = document.querySelector(".todayImg");
let date0 = document.querySelector('.date0');
let date1 = document.querySelector('.date1');
let date2 = document.querySelector('.date2');
let date3 = document.querySelector('.date3');
let numDay0 = document.querySelector('.numDay0');
let numDay1 = document.querySelector('.numDay1');
let numDay2 = document.querySelector('.numDay2');
let numDay3 = document.querySelector('.numDay3');


let weatherIconMap = [
    {icon: "01d", src: 'Weather%20icons/01d@2x.png'},
    {icon: "02d", src: 'Weather%20icons/02d@2x.png'},
    {icon: "03d", src: 'Weather%20icons/03d@2x.png'},
    {icon: "04d", src: 'Weather%20icons/04d@2x.png'},
    {icon: "09d", src: 'Weather%20icons/09d@2x.png'},
    {icon: "10d", src: 'Weather%20icons/10d@2x.png'},
    {icon: "11d", src: 'Weather%20icons/11d@2x.png'},
    {icon: "13d", src: 'Weather%20icons/13d@2x.png'},
    {icon: "50d", src: 'Weather%20icons/50d@2x.png'},
]


async function getResponse() {
    let response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=53.9&lon=27.5667&exclude=minutely,hourly&appid=1ac62dc3dd3cfeba62e395b7fbf071cd');
    let content = await response.json();
    tempDay0.innerHTML = (Math.round(content.daily[0].temp.day - 273.15)) + '&#176;';
    tempDay1.innerHTML = (Math.round(content.daily[1].temp.day - 273.15)) + '&#176;';
    tempDay2.innerHTML = (Math.round(content.daily[2].temp.day - 273.15)) + '&#176;';
    tempDay3.innerHTML = (Math.round(content.daily[3].temp.day - 273.15)) + '&#176;';
    tempNight0.innerHTML = (Math.round(content.daily[0].temp.morn - 273.15)) + '&#176;';
    tempNight1.innerHTML = (Math.round(content.daily[1].temp.morn - 273.15)) + '&#176;';
    tempNight2.innerHTML = (Math.round(content.daily[2].temp.morn - 273.15)) + '&#176;';
    tempNight3.innerHTML = (Math.round(content.daily[3].temp.morn - 273.15)) + '&#176;';
    let weatherIcon0 = content.daily[0].weather[0].icon;
    let weatherIcon1 = content.daily[1].weather[0].icon;
    let weatherIcon2 = content.daily[2].weather[0].icon;
    let weatherIcon3 = content.daily[3].weather[0].icon;
    weatherIconMap.forEach(e => {
        if(weatherIcon0 === e.icon) {
            let imgURL = e.src;
            img0.setAttribute('src', imgURL);
        }
        if(weatherIcon1 === e.icon) {
            let imgURL = e.src;
            img1.setAttribute('src', imgURL);
        }
        if(weatherIcon2 === e.icon) {
            let imgURL = e.src;
            img2.setAttribute('src', imgURL);
        }
        if(weatherIcon3 === e.icon) {
            let imgURL = e.src;
            img3.setAttribute('src', imgURL);
        }
    })

    //block today
    speedWind.innerHTML = Math.round(content.current.wind_speed)+ " м/с";
    humidity.innerHTML = content.current.humidity + "%";
    pressure.innerHTML = Math.round(content.current.pressure/1.33) + "мм."
    currentTempDay.innerHTML = (Math.round(content.current.temp - 273.15)) + '&#176;';
    maxTemp.innerHTML = "Максимальная температура сегодня: " + Math.round(content.daily[0].temp.max - 273.15) + '&#176;';
    tempFeelingToday.innerHTML =  "Ощущается как: " +  Math.round(content.current.feels_like - 273.15) + '&#176;';
    // weatherIconToday.innerHTML = "Today " + content.weather[0].icon;
    weatherIconMap.forEach(e => {
        if (weatherIcon0 === e.icon) {
            let imgURL = e.src;
            todayImg.setAttribute('src', imgURL);
        }
    })
}

getResponse();


//Time block
function getCorrectTime() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let daysYear = 365;


    let currentMonth = currentDate.getMonth() + 1;
    let tomorrowMonth = currentDate.getMonth() + 1;
    let tomorrowTomorrowMonth = currentDate.getMonth() + 1;
    let tomorrowTomorrowTomorrowMonth = currentDate.getMonth() + 1;


    let dayToday = currentDate.getDate();
    let dayTomorrow = dayToday + 1;
    let dayTomorrowTomorrow = dayToday + 2;
    let dayTomorrowTomorrowTomorrow = dayToday + 3;

    let months = [
        {days: 31, num: 1},
        {days: 28, num: 2},
        {days: 31, num: 3},
        {days: 30, num: 4},
        {days: 31, num: 5},
        {days: 30, num: 6},
        {days: 31, num: 7},
        {days: 31, num: 8},
        {days: 30, num: 9},
        {days: 31, num: 10},
        {days: 30, num: 11},
        {days: 31, num: 12}
    ]

    let numDays = [
        {num: 1, day: "Пн"},
        {num: 2, day: "Вт"},
        {num: 3, day: "Ср"},
        {num: 4, day: "Чт"},
        {num: 5, day: "Пт"},
        {num: 6, day: "Сб"},
        {num: 0, day: "Вс"},
    ]

    let numberDay0 = currentDate.getDay();
    let numberDay1 = currentDate.getDay() + 1;
    let numberDay2 = currentDate.getDay() + 2;
    let numberDay3 = currentDate.getDay() + 3;

    if (numberDay1 > 6) {
        numberDay1 -= 7;
    }
    if (numberDay2 > 6) {
        numberDay2 -= 7;
    }
    if (numberDay3 > 6) {
        numberDay3 -= 7;
    }

    numDays.forEach(e => {
        if(numberDay0 === e.num) {
            numDay0.innerHTML = e.day;
        }
        if(numberDay1 === e.num) {
            numDay1.innerHTML = e.day;
        }
        if(numberDay2 === e.num) {
            numDay2.innerHTML = e.day;
        }
        if(numberDay3 === e.num) {
            numDay3.innerHTML = e.day;
        }
    })


    if(year%4 === 0) {
        months[1].days = 29;
        daysYear = 366;
    }

    months.forEach(e => {
        if(currentMonth === e.num) {
            if(dayTomorrow - e.days > 0) {
                dayTomorrow = dayTomorrow - e.days;
                tomorrowMonth++;
            }
                if(dayTomorrow < 10) {
                    dayTomorrow = `0${dayTomorrow}`;
                }
                if(tomorrowMonth < 10) {
                    tomorrowMonth = `0${tomorrowMonth}`
                }
            if(dayTomorrowTomorrow - e.days > 0) {
                dayTomorrowTomorrow -= e.days;
                tomorrowTomorrowMonth++;
            }
                if(dayTomorrowTomorrow < 10) {
                    dayTomorrowTomorrow = `0${dayTomorrowTomorrow}`;
                }
                if(tomorrowTomorrowMonth < 10) {
                    tomorrowTomorrowMonth = `0${tomorrowTomorrowMonth}`
                }

            if(dayTomorrowTomorrowTomorrow - e.days > 0) {
                dayTomorrowTomorrowTomorrow -= e.days;
                tomorrowTomorrowTomorrowMonth++;
            }
                if(dayTomorrowTomorrowTomorrow < 10) {
                    dayTomorrowTomorrowTomorrow = `0${dayTomorrowTomorrowTomorrow}`;
                }
                if(tomorrowTomorrowTomorrowMonth < 10) {
                    tomorrowTomorrowTomorrowMonth = `0${tomorrowTomorrowTomorrowMonth}`
                }
        }
    })
    date0.innerHTML = 'Сегодня';
    date1.innerHTML = `${dayTomorrow}.${tomorrowMonth}`;
    date2.innerHTML = `${dayTomorrowTomorrow}.${tomorrowTomorrowMonth}`;
    date3.innerHTML = `${dayTomorrowTomorrowTomorrow}.${tomorrowTomorrowTomorrowMonth}`;
    console.log(typeof dayTomorrow)
}

getCorrectTime()
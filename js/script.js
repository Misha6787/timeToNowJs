// eslint-disable-next-line strict
'use strict';

const formatA = document.querySelector('.formatA'),
    formatB = document.querySelector('.formatB');
const  ziroIfLessTen = elem => (elem < 10 ? elem = '0' + elem : elem);
const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];
};
const ucFirst = str => str[0].toUpperCase() + str.slice(1);
const ifAug = item => (item !== 'август' ? item.replace('ь', 'я') : item += 'a');
setInterval(() => {
    const data = new Date(),
        getYear = declOfNum(data.getFullYear(), ['год', 'года', 'года']),
        getMonth = ifAug(data.toLocaleString('ru', { month: 'long' })),
        getDay = ucFirst(data.toLocaleString('ru', { weekday: 'long' })),
        getHours = declOfNum(data.getHours(), ['часов', 'час', 'часов']),
        getMinut = declOfNum(data.getMinutes(), ['минуты', 'минута', 'минут']),
        getSecond = declOfNum(data.getSeconds(), ['секунда', 'секунды', 'секунд']),
        ziroIfLessTenInHours = ziroIfLessTen(data.getHours()),
        ziroIfLessTenInMinute = ziroIfLessTen(data.getMinutes()),
        ziroIfLessTenInSeconds = ziroIfLessTen(data.getSeconds());

    const textYear = `${data.getFullYear()} ${getYear}`,
        textMonth = `${data.getMonth()} ${getMonth}`,
        textDay = `Сегодня ${getDay}`,
        textHours =  `${ziroIfLessTenInHours} ${getHours}`,
        textMinut =  `${ziroIfLessTenInMinute} ${getMinut}`,
        textSecond =  `${ziroIfLessTenInSeconds} ${getSecond}`,
        nowTime = data.toLocaleString('ru').replace(',', ' -');

    formatA.textContent = `${textDay}, ${textMonth} ${textYear}, ${textHours} ${textMinut} ${textSecond}`;
    formatB.textContent = `${nowTime}`;
}, 1000);

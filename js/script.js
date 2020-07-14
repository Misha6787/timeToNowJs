// eslint-disable-next-line strict
'use strict';

const formatA = document.querySelector('.formatA'),
    formatB = document.querySelector('.formatB');
const  checkTheFirstNum = elem => (elem < 10 ? elem = '0' + elem : elem);
const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];
};
const ucFirst = str => str[0].toUpperCase() + str.slice(1);
const addEnding = item => (item !== 'август' ? item.replace('ь', 'я') : item += 'a');
setInterval(() => {
    const data = new Date();

    const year = data.getFullYear(),
        hour = data.getHours(),
        minut = data.getMinutes(),
        second = data.getSeconds(),
        arrYear = ['год', 'года', 'года'],
        arrHours = ['часов', 'час', 'часов'],
        arrMinuts = ['минуты', 'минута', 'минут'],
        arrSeconds = ['секунда', 'секунды', 'секунд'];

    const  month = addEnding(data.toLocaleString('ru', { month: 'long' })),
        day = ucFirst(data.toLocaleString('ru', { weekday: 'long' }));

    const textYear = `${data.getFullYear()} ${declOfNum(year, arrYear)}`,
        textMonth = `${data.getMonth()} ${month}`,
        textDay = `Сегодня ${day}`,
        textHours =  `${checkTheFirstNum(hour)} ${declOfNum(hour, arrHours)}`,
        textMinut =  `${checkTheFirstNum(minut)} ${declOfNum(minut, arrMinuts)}`,
        textSecond =  `${checkTheFirstNum(second)} ${declOfNum(second, arrSeconds)}`,
        nowTime = data.toLocaleString('ru').replace(',', ' -');

    formatA.textContent = `${textDay}, ${textMonth} ${textYear}, ${textHours} ${textMinut} ${textSecond}`;
    formatB.textContent = `${nowTime}`;
}, 1000);

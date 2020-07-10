// eslint-disable-next-line strict
'use strict';

const formatA = document.querySelector('.formatA'),
    formatB = document.querySelector('.formatB');
const addNull = elem => (elem.toString().length === 1 ? elem = '0' + elem.toString().slice(0) : elem);
const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];
};
const ucFirst = str => str[0].toUpperCase() + str.slice(1);
const ifAug = item => (item !== 'август' ? item.replace('ь', 'я') : item += 'a');
setInterval(() => {
    const data = new Date(),
        textYear = data.getFullYear() + ' ' + declOfNum(data.getFullYear(), ['год', 'года', 'года']),
        textMonth = data.getMonth() + ' ' + ifAug(data.toLocaleString('ru', { month: 'long' })),
        textDay = 'Сегодня ' + ucFirst(data.toLocaleString('ru', { weekday: 'long' })),
        textHours = addNull(data.getHours()) + ' ' + declOfNum(data.getHours(), ['часов', 'час', 'часов']),
        textMinut = addNull(data.getMinutes()) + ' ' + declOfNum(data.getMinutes(), ['минуты', 'минута', 'минут']),
        textSecond = addNull(data.getSeconds()) + ' ' + declOfNum(data.getSeconds(), ['секунда', 'секунды', 'секунд']),
        nowTime = data.toLocaleString('ru').replace(',', ' -');

    formatA.textContent = `${textDay}, ${textMonth} ${textYear}, ${textHours} ${textMinut} ${textSecond}`;
    formatB.textContent = `${nowTime}`;
}, 1000);

let d;

d = new Date();

d  = d.toString();
d = new Date(2021,0,10,12,30,0);

d = new Date('2021-07-10');

d = new Date('2021-07-10T12:30:00');

d = Date.now();

d = new Date('07-10-2022');

d = d.getTime();

d = d.valueOf();

d = new Date(1657391400000);

d = Math.floor(Date.now() / 1000);

d = new Date();

d = d.getFullYear();

d = new Date('07-10-2022');

// d = d.getMonth() + 1;
d= d.getDay();

// d = Intl.DateTimeFormat('en-US').format(d);
d = Intl.DateTimeFormat('default').format(d);


d = new Date('2023-05-10')

// console.log(d.toLocaleString('en-GB', {timeZone: 'UTC'}));

console.log(d.toLocaleString());
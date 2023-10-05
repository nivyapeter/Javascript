let x;

const name = 'john';
const age = 50;

x = `hello, my name is ${name} and I am ${age} years old`

const s = new String('hello world')

x = s.charAt(0);
x = s.indexOf('h');

x= s.substring(3,5);

x = s.slice(0,5);

x = '      hello world';

x = s.replace('world','john');

x = s.includes('hello');

x = s.valueOf();

x = s.split(' ');

// capitalize

x = s.charAt(0).toUpperCase() + s.substring(1);
x = s[0].toUpperCase() + s.substring(1);
x = `${s[0].toUpperCase()}${s.substring(1)} `

console.log(x);
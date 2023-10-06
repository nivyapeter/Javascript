const x = 100;

console.log(x ,'in global function');

const scope = () => {
    console.log(window.innerHeight);
    console.log(x,'in function');
    const y = 4;
}


scope();

if(true) {
    console.log(x,'in block');
}
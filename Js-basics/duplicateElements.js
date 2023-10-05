const arrNumbers = [1,2,3,4,2,4,6];

const duplicates = arrNumbers.filter((number,index) => arrNumbers.indexOf(number) != index);

console.log(duplicates);
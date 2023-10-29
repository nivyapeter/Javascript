// const calculateConvergentSeriesLength = (number) => {
//     let count = 1;
//     if (number === 1) {
//       return 1;
//     } else {
//       while (number !== 1) {
//         number = number % 2 === 0 ? number / 2 : number * 3 + 1;
//         count++;
//       }
//       return count;
//     }
//   };

function longestSequenceLengthBetweenValues(firstNumber, lastNumber) {
  let longestLength = 0;
  let count = 1;
  const arrayOfLength = [
    {
      number: 0,
      length: 0,
    },
  ];

  for (let number = firstNumber; number <= lastNumber; number++) {
    const dataToBeStored = arrayOfLength.find((data) => data.number === number);
    if (dataToBeStored) {
        count += dataToBeStored.length;
        break;
    } else {
      while (number !== 1) {
        number = number % 2 === 0 ? number / 2 : number * 3 + 1;
        count++;
      }
    }

    arrayOfLength.push({
        number: number,
        length: count
    })
  
    longestLength = Math.max(longestLength, count);
  }
  return longestLength;
}

const longestLength = longestSequenceLengthBetweenValues(2, 4);

console.log(`longestLength = ${longestLength}`);

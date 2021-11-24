let dogName = prompt("Enter the name");
let dogYear = prompt("Enter the age");
function dogYears(name,age) {
  if (age>2) {
      console.log(dogName + " " + "is" + " " + "old");
  }else {
      console.log(dogName + " " + "is yung");
  }
}
dogYears(dogName,dogYear);
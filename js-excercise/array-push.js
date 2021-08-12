var fruits = ["apple", "orrange","grapes"];
fruits[fruits.length]="lemon";
fruits.pop();
fruits.push("lemon");
// fruits.shift();
fruits.unshift(grapes);
document.getElementById("demo").innerHTML = fruits;
const companies = [
  {
    name: "company four",
    category: "Tech",
    start: 1983,
    end: 2006,
  },
  {
    name: "company two",
    category: "Retail",
    start: 1983,
    end: 2004,
  },
  {
    name: "company three",
    category: "Retail",
    start: 1985,
    end: 2005,
  },
  {
    name: "company one",
    category: "Finance",
    start: 1982,
    end: 2003,
  },
];

const ages = [33, 44, 56, 23, 78, 45];

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// forEach

companies.forEach((comapny) => {
  console.log("forEach", comapny.name);
});

let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 45) {
    canDrink.push(ages[i]);
  }
}

console.log(canDrink);

// triangle pyramid
const n = 5;
for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j < n - i; j++) {
    str += "";
  }
  for (let k = 0; k < i; k++) {
    str += "*";
  }
  console.log(str);
}

// Filter

const carDrinks = companies.filter((company) => company.category === "Retail");

console.log("filter", carDrinks);

// get companies that lasted 10 years or more

const lastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);

console.log(lastedTenYears);

// create array of company names

const newArray = companies.map((comapny) => comapny.name);
console.log("map", newArray);

// SORT

const sortCompanies = companies.sort((a, b) => {
  if (a.start > b.start) {
    return 1;
  } else {
    return -1;
  }
});

console.log("sort", companies, sortCompanies);

// reduce

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}

const ageTotal = ages.reduce((total, age) => total + age, 0);
console.log("reduce", ageSum, ageTotal);

// combine methods

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 70)
  .sort((a, b) => a - b)
  .reduce((total, age) => total + age, 0);

console.log("combined", combined);

// find

const foundItem = sortCompanies.find((item) => item.start === 1983);

console.log("find", foundItem);

const items = [
  {
    name: "bike",
    price: 100,
  },
  {
    name: 'tv',
    price: 200,
  },
  {
    name: 'Album',
    price: 10,
  },
  {
    name: 'book',
    price: 5,
  },
];

// some

const hasInexpensiveItems = items.some((item) =>item.price <= 500)

console.log('some',hasInexpensiveItems);

// every

const haveInexpensiveItems = items.every((item) => item.price <=100 );
console.log('every',haveInexpensiveItems);
let person;

person = {
  name: ["bob", "smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hai, I am ${this.name[0]}`);
  },
};

const arrayOfObject = [
  {
    bf: true,
    lu: false,
    dk: true,
    name: "anjana",
  },
  {
    bf: false,
    lu: false,
    dk: false,
    name: "sara",
  },
];

let newObject = {};
arrayOfObject.forEach((data) => {
   newObject[data.name] = {
      bf: data.bf,
      lu: data.lu,
      dk: data.dk
   }
})

person = newObject

person = {
   name:{
      first: "anjana",
      second: "sara"
   }
}

person = newObject

person = {
   name: {
      first: 'anjana',
      second: "sara"
   }
}

const myDataName = "height";
const myDataValue = "1.75m";

person["eyes"] = "hazel";

person[myDataName] = myDataValue;

person = {
   name: {
      first: 'anjana',
      second: "sara"
   }
}

const createPerson = () => {
   const obj = {};
   obj.details = person["name"];

   return obj;
}

console.log(createPerson());
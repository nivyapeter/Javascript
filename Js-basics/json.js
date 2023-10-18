let superHeros;

superHeros = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes",
      ],
    },
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
  ],
};

let superHeroesList = {};
const populate = async () => {
  const requestUrl =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

  const response = await fetch(requestUrl);
  const superHeroes = await response.json();

  superHeroesList = {
    ...superHeroes,
    members: superHeroes.members.map((member) => ({
      name: member.name,
      age: member.age,
      secretIdentity: member.secretIdentity,
      powers: member.powers.map((power) => power),
    })),
  };

  console.log(superHeroesList);
};

let myObj = {
  name: "sara",
  age: 30
}

let myString =  JSON.stringify(myObj);

console.log(myString);

let data;
const todos = ["subscribe to developedbyed", "check out his courses", "woww"];

const socials = ["dev.com", "youtube.com", "twitter.com", "woww"];

// socials.forEach((social) => {
//     const el = document.createElement("li");
//     const content = document.createTextNode(social);

//     el.appendChild(content);
//     document.body.appendChild(el);
// })

// To remove duplicates use [...new Set([...todos,...socials])]
const merge = [...new Set([...todos, ...socials])];
data = merge;

// Extracting objects
const user = {
  age: 27,
  tweets: 20,
  todo: ["i had my first kilt wahoo", "its raining, i love rain"],
};

const {
  age,
  tweets,
  todo: [wahoo, rain],
} = user;

data = rain;

// if statement

const getUserData = () => {
  const user = 'hgdhafdhga';
  if(!user) return;
  const data = {
    name: "dev",
    age: 28,
  };
  console.log(data);
};

data = getUserData();
console.log(data);

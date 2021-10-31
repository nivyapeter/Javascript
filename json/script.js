const strObj = {
  id:0,
  name: "debug",
  company : "google",
};

const strJson =`{
  "id"= 0,
  "name" = "debug",
  "company" = "google",
}`;
const parsedJSON = JSON.parse(strJson);
const stringifyObj = JSON.stringyfy(strObj);
console.log(strObj);
console.log(strJson);
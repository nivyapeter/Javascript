// spread operators



// let globalplayer={
//     id: 0,
//     name: "accademy",
//     play: "crickeet",
// };                              //////mutable(arary and objects) can be chage the value

// let player1={...globalplayer};
// player1.play="football";
// console.log(player1);
// console.log(globalplayer);




// let globalplayer2 = "Anna";

// let player2 = globalplayer2;

// player2 = "seena";

// console.log(player2);
// console.log(globalplayer2);     ////immuttable (strings and integer - cannot change the value .onece assigned it cant be changed)


// let player1 = "neena";
// let player2 = player1;
// player2 = "anju";
// console.log(player1);
// console.log(player2);




// let item1 = ["1","2","3",];
// let item2 = ["4","5","6"];

// let items = [...item1,...item2,["7","8","9"]];
// console.log(items);


//#############  Rest operetor########################


// let globalname = ["Rahul","Maju","sinju"]

// console.log(globalname);
// let[first,second,third] = globalname ;
// console.log(first);

// let globalname1 = {
//     id:0,
//     name:"anju",
//     play: "football",
// }

// let{id,name,play} = globalname1;
// console.log(name,id,play);
// let{id,...rest}= globalname1;
// console.log(id);
// console.log(rest);


// ############arrow function################

// const myFunc = (value) => value + 5
  
// console.log(myFunc(5));


// ###########  for each method #####3



// const globalplayer = [
//     {
//     id:0,
//     name:"anju",
//     play: "football",
// },
// {
//     id:0,
//     name:"anju",
//     play: "football",
// },
// {
//     id:0,
//     name:"anju",
//     play: "football",
// },
// ]


// for(let i=0;i<globalplayer.length;i++) {
//     console.log(globalplayer[i].play)
// }

// globalplayer.forEach((value,index,array) => {
//       console.log(array);
// });


// ########map and filter########


// const globalplayer = [
//     {
//     id:0,
//     name:"anju",
//     play: "football",
// },
// {
//     id:0,
//     name:"anju",
//     play: "cricket",
// },
// {
//     id:0,
//     name:"anju",
//     play: "football",
// },
// ];



// const newArray = globalplayer.map((value) => value.play);
// console.log(newArray);

// const newArray = globalplayer.filter((value) => value.play === football);
// console.log(newArray);

// ################# find
// const globalplayer = [
//     {
//     id:0,
//     name:"anju",
//     play: "football",
// },
// {
//     id:0,
//     name:"anju",
//     play: "cricket",
//     company: {
//         com_name:"google"
//     }
// },
// {
//     id:1,
//     name:"anju",
//     play: "football",
// },
// ];
// // const newObj = globalplayer.find((value) => value.play === cricket &&  value.id === 1);
// // console.log(newObj);

// if(globalplayer && globalplayer.company && globalplayer.company.com_name) {
//     console.log(globalplayer.company.com_name);
// }



// #########chaining

// const numArray = [12,33,45,66,77,88,99,2,6,44];

// const nextArray = numArray.map((value) => value).filter((data) => data > 20).sort((a,b) =>a-b).reduce((total,value) =>total + value,0);
// console.log(nextArray);

// document.getElementById("header").style.color="red";
const header = document.querySelectorAll("#header");
header.forEach((data) => (data.style.color="red"));

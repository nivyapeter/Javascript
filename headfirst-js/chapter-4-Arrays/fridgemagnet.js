var products = ["choclte","ice mint" ,"cake batter","bubblegum"];

var bubbleGum = [false,false,false,true];
for(i=0; i<bubbleGum.length; i++) {
    if(bubbleGum[i]) {
        console.log(products[i] + " " + "contains bubble gum");
    }
}
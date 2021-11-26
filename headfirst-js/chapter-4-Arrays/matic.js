function makePhrases() {
    var words1 = ["24/7","multi-tir","30000","b-b"];
    var words2 = ["empowered","value-added","oriented","focussed"]

    var rand1 = Math.floor(Math.random() * words1.length);
    var phrase = words1[rand1];
    alert(phrase);
}
makePhrases();
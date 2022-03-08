/*  //game
const playerName = "alstjd974"
const playerPoints = 1212;
const playerFat = true;
*/

/*
// array(배열)로 특성을 정리할 경우 의미를 알지 못한다.
const player = ["alstjd974", 1212, true];

console.log(player);
*/

//object
const player = {
    name : "alstjd974", // proerty(특성)
    points : 10,
    fat : true,
};

console.log(player);
console.log(player.name); // = player["name"]
// constant는 수정이 불가능 / object 안의 무언가는 수정,업데이트가 가능하다. 
player.fat = false;
player.lastName = "Lee"
player.points = player.points + 15;
console.log(player);


var name;
var attack;
var hp;
var message;

var isYourCharacterChosen = false;
var isOponentChosen = false;

var darthVader = {
  name: "Darth Vader",
  attack: Math.floor(Math.random() * 19) + 6,
  hp: 80,
  message: "hello"
};
var kenobi = {
  name: "Kenobi",
  attack: Math.floor(Math.random() * 14) + 4,
  hp: 100,
  message: "hello there"
};
var darthMaul = {
  name: "Darth Maul",
  attack: Math.floor(Math.random() * 9) + 6,
  hp: 100,
  message: ""
};
var yoda = {
  name: "Yoda",
  attack: Math.floor(Math.random() * 14) + 2,
  hp: 120,
  message: "lose, you will"
};

function startGame() {

  var isYourCharacterChosen = false;
  var isOponentChosen = false;
  var chosenCharacter = "";
  var chosenOpponent = "";
}

if (!isYourCharacterChosen) {
  $(".character").one("click", function () {
    var key = $(this).attr("value");
    // console.log(key);
    var chosenCharacter = $("#" + key);
    $(".yourCharacter").append(chosenCharacter);

    var enemies = $(".characters");
    $(".charactersToAttack").append(enemies);
    // $(".characters").off("click");
    $(".character").addClass("enemies");
    $(".character").removeClass("character");
    console.log(isYourCharacterChosen);

  });

}
isYourCharacterChosen = true;

// $(".enemies").on("click", function () {
//   var enem = $(this).attr("value");
//   console.log(key);
//   var chosenOpponent = $("#" + enem);
//   $(".opponent").append(chosenOpponent);
// });
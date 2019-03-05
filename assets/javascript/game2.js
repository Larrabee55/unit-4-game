$(document).ready(function () {
  // 
  var yourCharacterHp = 100;
  var opponentHp = 100;
  // this function is the attack on the opponents hp
  function yourAttack() {
    var yourCharacterAttack = Math.floor(Math.random() * 20);
    opponentHp -= yourCharacterAttack;
    $(".opponent").children(".card").children(".card-footer").children(".hp").empty().append("HP: " + opponentHp);
  }
  // this function is the attack from the opponent on to your character hp
  function opponentAttackBack() {
    var opponentAttack = Math.floor(Math.random() * 20);
    yourCharacterHp -= opponentAttack;
    $(".yourCharacter").children(".card").children(".card-footer").children(".hp").empty().append("HP: " + yourCharacterHp);
  }
  // creates a if statement so the on click will on work once
  var isOpponentChosen = false;
  var isYourCharacterChosen = false;
  var bothPicked = false;
  var isAnotherOpponentChosen = false;
  console.log(isOpponentChosen);
  console.log(isYourCharacterChosen);


  if (isYourCharacterChosen === false) {
    // allows user to choose character
    $(".character").on("click", function () {
      // picks character by ID
      var key = $(this).attr("id");
      var chosenCharacter = $("#" + key);
      // when character is chosen it moves it to the opponent row
      if (!isYourCharacterChosen) {
        $(".yourCharacter").append(chosenCharacter);
        // changes the value to true so user can choose multiple characters
        isYourCharacterChosen = true;
        // moves the rest of the characters to the characters available to attack row
        var enemies = $(".card-group");
        $(".charactersToAttack").append(enemies);
        $(".card-group").children(".card").addClass("enemies");
        // then gives the user the option to choose their opponent
        if (isOpponentChosen === false) {
          $(".enemies").on("click", function () {
            // grabs the id of the oppeonent
            var enem = $(this).attr("id");
            var chosenOpponent = $("#" + enem);
            //then moves the selected opponent to the opponent row
            if (!isOpponentChosen) {
              $(".opponent").append(chosenOpponent);
              // changes the both to true
              isOpponentChosen = true;
              bothPicked = true;
            }
            // activats the attack button
            if (bothPicked === true) {

              $(".btn").on("click", function () {
                // calls the attack function
                yourAttack()
                // determines if the opponent is out of HP
                if (opponentHp <= 0) {
                  alert("You Win!");
                  $(".opponent").empty();
                  // if user defeats the opponent it lets the uset pick the second opponent
                  $(".enemies").on("click", function () {
                    var enem = $(this).attr("id");
                    var chosenOpponent = $("#" + enem);

                    if (!isAnotherOpponentChosen) {
                      $(".opponent").append(chosenOpponent);
                      // resetsHP for opponent
                      opponentHp = 100;
                      // var enemHp = $(this).attr("value");
                      // var opponentHp = enemHp;
                      isAnotherOpponentChosen = true;
                      secondBothPicked = true;
                      // resets hp for user character for second fight
                      yourCharacterHp = 100;
                      $(".yourCharacter").children(".card").children(".card-footer").children(".hp").empty().append("HP: " + yourCharacterHp);
                    }
                  });
                  // if users character doesn't kill the opponent then the opponent attacks back
                } else {
                  opponentAttackBack()
                  // if the user character gets 0 or less than 0 then the user loses
                  if (yourCharacterHp <= 0) {
                    alert("You Lose!");
                    $(".yourCharacter").empty();
                    $(".btn").off(click);
                  }
                }
              });
            }
          });
        }
      }
    });
  }
});
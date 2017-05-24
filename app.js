"use strict";

$(document)
  .ready(() => {
    let $yellow = $('#yellow');
    let $blue = $('#blue');
    let $red = $('#red');
    let $green = $('#green');
    let colors = [$yellow, $blue, $red, $green];
    let pattern = [];
    let patternCount = 0;
    let streak = 0;
    let longest = [];
    let userArray = [];
    let activeGame = false;
    let power = false;
    let matching = true;

    //Turns the game on/off
    $('.slider')
      .on('click', () => {
        togglePower();
      });

    //Initializes a new game
    $('#start')
      .on('click', () => {
        if (power === true) {
          initializeGame();
          updatePattern(colors);
          displayPattern(pattern);
          updateStreak();
        }
      });

    $('.pads')
      .on('click', (event) => {
        if (power === true && activeGame === true) {
          playSound();
          updateUserArray(event, userArray);
          checkArrays();
          updateStreak();
        }
      });


    // ADD KEYUP EVENTS TO SELECT PADS
    $(document)
      .keyup((event) => {
        if (power === true && activeGame === true) {
          if (event.which === 219) {
            userArray.push($yellow[0].id);
            yellowSound();
            toggleYellow();
            checkArrays();
            updateStreak();
          } else if (event.which === 221) {
            userArray.push($blue[0].id);
            blueSound();
            toggleBlue();
            checkArrays();
            updateStreak();

          } else if (event.which === 13) {
            userArray.push($green[0].id);
            greenSound();
            toggleGreen();
            checkArrays();
            updateStreak();
          } else if (event.which === 222) {
            userArray.push($red[0].id);
            redSound();
            toggleRed();
            checkArrays();
            updateStreak();
          }
        }
      });


    //Toggles the power to the game on or off
    function togglePower() {
      if (power) {
        power = false;
      } else {
        power = true;
      }
    }
    //Configures the initial game state
    function initializeGame() {
      activeGame = true;
      patternCount = 0;
      streak = 0;
      pattern = [];
      userArray = [];
    }

    //Updates the pattern with an additional color
    function updatePattern(arr) {
      let randomColor = colors[Math.floor(Math.random() * arr.length)];
      pattern.push(randomColor);
      patternCount += 1;
    }

    //Displays the new pattern.   Toggles the glow class to show the new pattern
    function displayPattern(arr) {
      let i = 0;
      myLoop();

      function myLoop() {
        setTimeout(() => {
          let currentColor = arr[i];
          let currentColorId = currentColor[0].id;
          displayAndPlay(currentColorId);
          $(currentColor)
            .toggleClass(`${currentColorId}Glow`);
          setTimeout(() => {
            $(currentColor)
              .removeClass(`${currentColorId}Glow`);
          }, 500);
          i += 1;
          if (i < arr.length) {
            myLoop();
          }
        }, 750);
      }
    }

    //Updates the user array with the color they entered
    function updateUserArray(event, arr) {
      arr.push(event.target.id);
    }

    function checkArrays() {
      let patternId;
      let userId;
      for (let i = 0; i < userArray.length; i++) {
        if (pattern[i][0].id !== userArray[i]) {
          wrongSound();
          toggleModal();
          activeGame = false;
        }
      }
      if (pattern.length === userArray.length) {

        for (var i = 0; i < pattern.length; i++) {
          patternId = pattern[i][0].id;
          userId = userArray[i];
        }
        if (patternId === userId) {
          if (pattern.length >= longest.length) {
            longest = pattern;
          }
          matching = true;
          updatePattern(colors);
          displayPattern(pattern);
          userArray = [];
          streak += 1;
        } else if (!matching) {
          wrongSound();
          toggleModal();
          activeGame = false;
        }
      }
    }

    function updateStreak() {
      $('.streak')
        .text(streak);
    }
    //Toggles the glow class
    function toggleYellow() {
      $('.yellowPad')
        .toggleClass('yellowGlow');
      setTimeout(() => {
        $('.yellowPad')
          .removeClass('yellowGlow');
      }, 500);
    }

    //Toggles the glow class
    function toggleBlue() {
      $('.bluePad')
        .toggleClass('blueGlow');
      setTimeout(() => {
        $('.bluePad')
          .removeClass('blueGlow');
      }, 500);
    }

    //Toggles the glow class
    function toggleRed() {
      $('.redPad')
        .toggleClass('redGlow');
      setTimeout(() => {
        $('.redPad')
          .removeClass('redGlow');
      }, 500);
    }

    //Toggles the glow class
    function toggleGreen() {
      $('.greenPad')
        .toggleClass('greenGlow');
      setTimeout(() => {
        $('.greenPad')
          .removeClass('greenGlow');
      }, 500);
    }


    //Shows/Hides the modal
    function toggleModal() {
      $('#modal')
        .toggleClass("hideModal")
        .toggleClass('showModal');
      gameDecision();
    }


    function gameDecision() {
      let yes = $('.yesModalButton');
      let no = $('.noModalButton');
      $(yes)
        .on("click", (ev) => {
          ev.preventDefault();
          toggleModal();
          initializeGame();
          updateStreak();
          updatePattern(colors);
          setTimeout(() => {
            displayPattern(pattern);
          }, 500);
        });
      // $(yes)
      //     .on("keyup", () => {
      //         if (event.which === 13) {
      //             toggleModal();
      //             initializeGame();
      //             updateStreak();
      //             updatePattern(colors);
      //             displayPattern(pattern);
      //         }
      //     });
      $(no)
        .on("click", (ev) => {
          ev.preventDefault();
          toggleModal();
          updateStreak();
        });
      // $(no)
      //     .on("keyup", () => {
      //         if (event.which === 13) {
      //             toggleModal();
      //             initializeGame();
      //             updateStreak();
      //         }
      //     });
    }

    $('#lastButton')
      .on("click", () => {
        if (activeGame === false) {
          displayPattern(pattern);
        }
      });
    $('#longestButton')
      .on("click", () => {
        if (activeGame === false) {

          displayPattern(longest);
        }
      });

    function greenSound() {
      document.getElementById("greenSound")
        .play();
    }

    function redSound() {
      document.getElementById("redSound")
        .play();
    }

    function blueSound() {
      document.getElementById("blueSound")
        .play();
    }

    function yellowSound() {
      document.getElementById("yellowSound")
        .play();
    }

    function playSound() {
      if (event.target.id === "yellow") {
        yellowSound();
      } else if (event.target.id === "blue") {
        blueSound();
      } else if (event.target.id === "red") {
        redSound();
      } else if (event.target.id === "green") {
        greenSound();
      }
    }

    function displayAndPlay(currentColorId) {
      if (currentColorId === "yellow") {
        yellowSound();
      } else if (currentColorId === "blue") {
        blueSound();
      } else if (currentColorId === "red") {
        redSound();
      } else if (currentColorId === "green") {
        greenSound();
      }
    }

    function wrongSound() {
      document.getElementById("wrongSound")
        .play();
    }
  });

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
        let userArray = [];
        let userCount = 0;
        let activeGame = false;
        let power = false;
        let matching = false;

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
                }
            });

        $('.pads')
            .on('click', (event) => {
                userArray.push(event.target.id);
                console.log("userArray:", userArray);
                console.log("Pattern:", pattern[0][0].id);
                let patternId = '';
                let userId = '';
                if (pattern.length === userArray.length) {
                    for (var i = 0; i < pattern.length; i++) {
                        patternId = pattern[i][0].id;
                        console.log("patternId:", patternId);
                    }
                    for (var j = 0; j < userArray.length; j++) {
                        userId = userArray[j];
                        console.log("userId:", userId);
                        console.log("Matching:", patternId === userId);

                    }
                }
                if (patternId === userId) {
                    matching = true;
                    updatePattern(colors);
                    displayPattern(pattern);
                }
                console.log("Pattern:", pattern);
            });








        //Toggles the power to the game on or off
        function togglePower() {
            if (power) {
                power = false;
                console.log("Power Off");
            } else {
                power = true;
                console.log("Power On");
            }
        }

        function initializeGame() {
            activeGame = true;
            patternCount = 0;
            userCount = 0;
            pattern = [];
            userArray = [];
            updatePattern(colors);
            displayPattern(pattern);
            console.log("Game Active");
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

            function myLoop() {
                setTimeout(() => {
                    console.log(i);
                    let currentColor = arr[i];
                    let currentColorId = currentColor[0].id;
                    $(currentColor)
                        .toggleClass(`${currentColorId}Glow`);
                    setTimeout(() => {
                        $(currentColor)
                            .removeClass(`${currentColorId}Glow`);
                    }, 500);
                    i += 1;
                    if (i < pattern.length) {
                        myLoop();
                    }
                }, 1000)
            }
            myLoop();
        }
    });

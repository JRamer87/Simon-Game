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
        let userArray = [];
        let activeGame = false;
        let power = false;
        let matching = true;
        let yes = $('.yesButton');
        let no = $('.noButton');

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
                }
            });

        $('.pads')
            .on('click', (event) => {
                if (power === true && activeGame === true) {
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
                        toggleYellow();
                        checkArrays();
                        updateStreak();
                    } else if (event.which === 221) {
                        userArray.push($blue[0].id);
                        toggleBlue();
                        checkArrays();
                        updateStreak();

                    } else if (event.which === 13) {
                        userArray.push($green[0].id);
                        toggleGreen();
                        checkArrays();
                        updateStreak();
                    } else if (event.which === 222) {
                        userArray.push($red[0].id);
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
                console.log("Power Off");
            } else {
                power = true;
                console.log("Power On");
            }
        }
        //Configures the initial game state
        function initializeGame() {
            activeGame = true;
            patternCount = 0;
            pattern = [];
            userArray = [];
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
            myLoop();

            function myLoop() {
                setTimeout(() => {

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
                }, 1000);
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
                    toggleModal();
                }
            }
            if (pattern.length === userArray.length) {

                for (var i = 0; i < pattern.length; i++) {
                    patternId = pattern[i][0].id;
                    userId = userArray[i];
                }
                if (patternId === userId) {
                    matching = true;
                    updatePattern(colors);
                    displayPattern(pattern);
                    userArray = [];
                    streak += 1;
                } else if (!matching) {
                    toggleModal();
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
        }

    });

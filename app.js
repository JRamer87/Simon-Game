"use strict";

$(document)
    .ready(() => {
        let yellow = $('#yellow');
        let blue = $('#blue');
        let red = $('#red');
        let green = $('#green');
        let colors = [yellow, blue, red, green];
        let pattern = [];
        let patternCount = 0;
        let activeGame = false;

        $('#start')
            .on('click', () => {
                activeGame = true;
                updatePattern(colors);
                displayPattern(pattern);
            });

        //starts the pattern
        //Grabs a random index from the colors arr and pushes it to the pattern array
        // Increments patternCount
        function updatePattern(arr) {
            let randomColor = colors[Math.floor(Math.random() * arr.length)];
            pattern.push(randomColor);
            patternCount += 1;
            // console.log("Pattern Count:" + patternCount);
        }

        //Displays the new pattern.   Toggles the glow class to show the new pattern
        function displayPattern(arr) {
            for (var i = 0; i < arr.length; i++) {
                console.log(arr.length);
                let currentColor = arr[i];
                let currentColorId = currentColor[0].id;
                $(currentColor)
                    .toggleClass(`${currentColorId}Glow`);
                setTimeout(() => {
                    $(currentColor)
                        .removeClass(`${currentColorId}Glow`);
                }, 500);
            }
            console.log("loop ends");
        }

        function wait(num) {
            let begin = new Date()
                .getTime();
            let stop = begin;
            while (stop < begin + num) {
                stop = new Date()
                    .getTime();
            }
        }


    });

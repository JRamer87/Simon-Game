// "use strict";
// let $yellow = $('#yellow');
// let $blue = $('#blue');
// let $red = $('#red');
// let $green = $('#green');
// let colors = [$yellow, $blue, $red, $green];
// let pattern = [];
// let patternCount = 0;
// let streak = 0;
// let userArray = [];
// let activeGame = false;
// let power = false;
// let matching = true;
//
// let game = {
//     // $yellow: $('#yellow'),
//     // $blue: $('#blue'),
//     // $red: $('#red'),
//     // $green: $('#green'),
//     // colors: [this.$yellow, this.$blue, this.$red, this.$green],
//     // pattern: [],
//     // patternCount: 0,
//     // streak: 0,
//     // userArray: [],
//     // activeGame: false,
//     // power: false,
//     // matching: true,
//
//     togglePower: function() {
//         if (power) {
//             power = false;
//             console.log("Power Off");
//         } else {
//             power = true;
//             console.log("Power On");
//         }
//     },
//     initializeGame: function() {
//         activeGame = true;
//         patternCount = 0;
//         pattern = [];
//         userArray = [];
//         console.log("Game Active");
//     },
//     updatePattern: function(arr) {
//         let randomColor = colors[Math.floor(Math.random() * arr.length)];
//         pattern.push(randomColor);
//         patternCount += 1;
//     },
//     displayPattern: function(arr) {
//         let i = 0;
//         myLoop();
//
//         function myLoop() {
//             setTimeout(() => {
//                 let currentColor = arr[i];
//                 console.log("arr[i]", currentColor);
//                 let currentColorId = currentColor[0].id;
//                 $(currentColor)
//                     .toggleClass(`${currentColorId}Glow`);
//                 setTimeout(() => {
//                     $(currentColor)
//                         .removeClass(`${currentColorId}Glow`);
//                 }, 500);
//                 i += 1;
//                 if (i < pattern.length) {
//                     myLoop();
//                 }
//             }, 1000);
//         }
//     },
//     updateUserArray: function(event, arr) {
//         arr.push(event.target.id);
//     },
//     checkArrays: function() {
//         let patternId;
//         let userId;
//         for (let i = 0; i < userArray.length; i++) {
//             if (pattern[i][0].id !== userArray[i]) {
//                 alert("Sorry you missed one.  Try again!");
//             }
//         }
//         if (pattern.length === userArray.length) {
//
//             for (var i = 0; i < pattern.length; i++) {
//                 patternId = pattern[i][0].id;
//                 userId = userArray[i];
//             }
//             if (patternId === userId) {
//                 matching = true;
//                 game.updatePattern(colors);
//                 game.displayPattern(pattern);
//                 userArray = [];
//                 streak += 1;
//             } else if (!matching) {
//                 alert('Sorry you missed one!  Try again!');
//             }
//         }
//     },
//     updateStreak: function() {
//         $('.streak')
//             .text(streak);
//     }
// };

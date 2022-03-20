"use strict";

const buttons = document.querySelectorAll(".glow-on-hover");
const buttonStart = buttons[0];
const buttonTable = buttons[1];
const buttonAddPlayer = buttons[2];
let players = document.querySelectorAll(".player");
const string = document.querySelector("tr");
const race = document.querySelector("tbody");
const cells = string.querySelectorAll("td");
const redPlayer = document.querySelector("red");
const leadersTable = document.querySelector(".leadersTable");
let positionFinish = race.getBoundingClientRect().left + race.getBoundingClientRect().width;
const positionStart = race.getBoundingClientRect().left;
let numberOfPlayers = players.length;
const playerWidth = players[0].getBoundingClientRect().width;
let maxId = 3;

const sleep = ms => new Promise(r => setTimeout(r, ms));

function finish(element, from) {
    element.style.left = from + 3 + 'px';
}

function move(element, from, step) {
    from += step;
    element.style.left = from + 'px';
}

buttonStart.addEventListener('click', async (event) => {
    let flag = true;

    while (flag) {
        players.forEach(item => {
            let randomStep = Math.floor(Math.random() * (88 - 10)) + 10;
            let positionPlayer = item.getBoundingClientRect().left;
            
            if (positionPlayer + randomStep >= positionFinish) {
                randomStep = positionFinish - positionPlayer - playerWidth;
            }
            
            move(item, positionPlayer, randomStep);

            positionPlayer = item.getBoundingClientRect().left;
            
            if (positionPlayer + playerWidth == positionFinish) {
                flag = false;
            }
        })
        
        await sleep(100);
    }

    players.forEach(item => {
        finish(item, positionStart);
    })
})

const toggleTable = () => {
    leadersTable.classList.toggle('active');
}

buttonTable.addEventListener('click', () => {
    toggleTable();
})

buttonAddPlayer.addEventListener('click', () => {
    let newPlayerRow = document.createElement('tr');
    let startPlayerCell = document.createElement('td');

    const newPlayer = document.createElement('div');
    newPlayer.classList.add('player');
    newPlayer.id = maxId++;
    newPlayer.style = "background-color: " + '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();

    race.appendChild(newPlayerRow);
    newPlayerRow.appendChild(startPlayerCell);
    startPlayerCell.appendChild(newPlayer);
    for (let i = 1; i <= 8; i++) {
        let playerCell = document.createElement('td');
        newPlayerRow.appendChild(playerCell);
    }
})

buttonAddPlayer.addEventListener('click', () => {
    players = document.querySelectorAll(".player");
})







// var movePlayer = function f(elem) {
//     var elemLeft = elem.getBoundingClientRect().left;
//     if (elemLeft < 200) {
//       redPlayer.style.left = elemLeft + 1 + 'px';
//       setTimeout(f, 100, elem);
//     }
//   };

// buttonStart.addEventListener('click', function() {
//     movePlayer(redPlayer)
//     }, false);


// let widthOfPlayer = parseInt(getComputedStyle(players[0]).width);


// for (const value of onePlayer.values()) {
    //     let marginOfPlayer = value;
    //     return marginOfPlayer;
    //   }





// let b = parseInt(getComputedStyle(players).marginLeft);



// buttonStart.addEventListener('click',(event) => {
//     let a = parseInt(getComputedStyle(players).width);

//     players.forEach(item => {
//         let b = parseInt(getComputedStyle(item).marginLeft);
//         console.log(b);
//     });
// })

// while (parseInt(getComputedStyle(onePlayer).marginLeft) + widthOfPlayer < 1980) {
//     // margin-left = Math.floor(Math.random() * (88 - 10)) + 10;
// }
let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let player = new Image();
let background = new Image();
//let floor = new Image();
let stone = new Image();
player.src = "img/player.png";
background.src = "img/back.png";
stone.src = "img/cube.png";

let fly = new Audio();
let score_audio = new Audio();

fly.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";

let stones = [];
stones[0] = {
    x: cvs.width,
    y: 310,
    born: 1,
    makeScore: 0

};

let score = 0;
let xPos = 10;
let yPos = 220;
let grav = 1.5;

let flagHeight = 1;
let flagLoose = 0;
let loops = 0;

document.addEventListener("keydown", moveUp);

function moveUp() {
    if (flagHeight) {
        yPos -= 200;
        flagHeight = 0;
    }
    fly.play();
}

function fillText() {
    if (!flagLoose) {
        ctx.fillStyle = "#000";
        ctx.font = "24px Bangers";
        ctx.fillText("Score: " + score, 10, cvs.height - 15); // Вывод очков
    } else {
        flagHeight = 0;
        ctx.fillStyle = "#000";
        ctx.font = "24px Bangers";
        ctx.fillText("YOU LOOSE! YOUR SCORE: " + score +
            "                                      press any key to restart",
            10, cvs.height - 15 );
        document.onkeypress = () => {
            location.reload();  // Перезагрузка страницы
        }
    }

}

function draw() {

    ctx.drawImage(background, 0, 0); // Рисуем фон
    ctx.drawImage(player, xPos, yPos); // Рисуем игрока

    for(let i = 0; i < stones.length; i++) {
        ctx.drawImage(stone, stones[i].x, stones[i].y);

        if (loops <= 2) {
            stones[i].x -= 4;
        } else if (loops <= 8) {
            stones[i].x -= 5;
        } else {
            stones[i].x -= 6;
        }


        if (stones[i].x <= 125 && stones[i].born === 1) {
            stones[i].born = 0;
            stones.push({
                x : cvs.width,
                y : 310,
                born: 1,
                makeScore: 0

            });
        }

        if ((xPos + player.width - 20 >= stones[i].x)
            && (yPos + player.height >= stones[i].y)
            && (xPos + player.width - 20 <= stones[i].x + stone.width))
        {
            flagLoose = 1;
            fillText();
            return 0;
        }

        if (stones[i].x <= 10 && stones[i].makeScore === 0) {
            ++score;
            ++loops;
            stones[i].makeScore = 1;
            score_audio.play();
        }
    }

    if (yPos <= 220) {
        if (loops <= 8) {
            yPos += 2 * grav;
        } else {
            yPos += 3 * grav;
        }
    } else {
        flagHeight = 1;
    }

    fillText();

    requestAnimationFrame(draw);
}

stone.onload = draw;

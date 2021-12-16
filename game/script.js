let pacman;
let monsters = [];
let colorRoute = false;

class Game{
    constructor() {
        this.map_Matrix = [
            ["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"],
            ["X",".",".",".",".",".",".",".",".",".",".",".",".","X","X",".",".",".",".",".",".",".",".",".",".",".",".","X"],
            ["X",".","X","X","X","X",".","X","X","X","X","X",".","X","X",".","X","X","X","X","X",".","X","X","X","X",".","X"],
            ["X",".","X","X","X","X",".","X","X","X","X","X",".","X","X",".","X","X","X","X","X",".","X","X","X","X",".","X"],
            ["X",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","X"],
            ["X",".","X","X","X","X",".","X","X",".","X","X","X","X","X","X","X","X",".","X","X",".","X","X","X","X",".","X"],
            ["X",".","X","X","X","X",".","X","X",".","X","X","X","X","X","X","X","X",".","X","X",".","X","X","X","X",".","X"],
            ["X",".",".",".",".",".",".","X","X",".",".",".",".","X","X",".",".",".",".","X","X",".",".",".",".",".",".","X"],
            ["X"," ","X","X","X","X",".","X","X","X","X","X"," ","X","X"," ","X","X","X","X","X",".","X","X","X","X"," ","X"],
            ["X"," ","X","X","X","X",".","X","X"," "," "," "," "," "," "," "," "," "," ","X","X",".","X","X","X","X"," ","X"],
            ["X"," ","X","X","X","X",".","X","X"," ","X","X","X"," "," ","X","X","X"," ","X","X",".","X","X","X","X"," ","X"],
            ["X"," ","X","X","X","X",".","X","X"," ","X"," "," "," "," "," "," ","X"," ","X","X",".","X","X","X","X"," ","X"],
            ["X",".",".",".",".",".","."," "," "," ","X"," "," "," "," "," "," ","X"," "," "," ",".",".",".",".",".",".","X"],
            ["X"," ","X","X","X","X",".","X","X"," ","X"," "," "," "," "," "," ","X"," ","X","X",".","X","X","X","X"," ","X"],
            ["X"," ","X","X","X","X",".","X","X"," ","X","X","X","X","X","X","X","X"," ","X","X",".","X","X","X","X"," ","X"],
            ["X"," ","X","X","X","X",".","X","X"," "," "," "," "," "," "," "," "," "," ","X","X",".","X","X","X","X"," ","X"],
            ["X"," ","X","X","X","X",".","X","X"," ","X","X","X","X","X","X","X","X"," ","X","X",".","X","X","X","X"," ","X"],
            ["X",".",".",".",".",".",".",".",".",".",".",".",".","X","X",".",".",".",".",".",".",".",".",".",".",".",".","X"],
            ["X",".","X","X","X","X",".","X","X","X","X","X",".","X","X",".","X","X","X","X","X",".","X","X","X","X",".","X"],
            ["X",".","X","X","X","X",".","X","X","X","X","X",".","X","X",".","X","X","X","X","X",".","X","X","X","X",".","X"],
            ["X"," ",".",".","X","X",".",".",".",".",".",".","."," "," ",".",".",".",".",".",".",".","X","X",".","."," ","X"],
            ["X","X","X",".","X","X",".","X","X",".","X","X","X","X","X","X","X","X",".","X","X",".","X","X",".","X","X","X"],
            ["X","X","X",".","X","X",".","X","X",".","X","X","X","X","X","X","X","X",".","X","X",".","X","X",".","X","X","X"],
            ["X",".",".",".",".",".",".","X","X",".",".",".",".","X","X",".",".",".",".","X","X",".",".",".",".",".",".","X"],
            ["X",".","X","X","X","X","X","X","X","X","X","X",".","X","X",".","X","X","X","X","X","X","X","X","X","X",".","X"],
            ["X",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","X"],
            ["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"]
        ];

        this.score = 0;
        this.pelletCount = 0;

        this.map = [];

        this.initMap();

        this.initPellets(10);

        this.initThings();

        this.initScoreText();

        this.initEndGameText();
    }

    initMap(){
        let k = 0;
        let g = 0;
        let map_temp = [];
        for (let i = 0; i < this.map_Matrix.length; i++) {
            for (let j = 0; j < this.map_Matrix[i].length; j++) {
                if(this.map_Matrix[i][j] === "X"){
                    map_temp.push(new Field(k, g, 'wall'));
                }
                if(this.map_Matrix[i][j] === " " || this.map_Matrix[i][j] === "."){
                    let a = new Field(k,g,'empty');

                    map_temp.push(a);
                }
                k+=30;
            }
            k=0;
            g+=30;
            this.map.push(map_temp);
            map_temp = [];
        }
    }

    initPellets(rnd){
        for(let i = 0; i < this.map.length; i++){
            for(let j = 0; j < this.map[i].length; j++){
                if(this.map[i][j].type === 'empty'){
                    if(Math.floor(Math.random() * rnd) === 1) {
                        this.map[i][j].pellet = new Pellet();
                        this.map[i][j].pellet.changeField(this, i, j);
                        this.pelletCount++;
                    }
                }
            }
        }
    }

    initThings(){
        monsters.push(new Monster('c')); //CLYDE
        monsters.push(new Monster( 'b')); //blinky
        monsters.push(new Monster( 'i')); //inky
        monsters.push(new Monster( 'p')); //pinky

        pacman = new Pacman();
    }

    initBasicSetup(){
        monsters[0].changeField(game, 1, 1);
        monsters[1].changeField(game, 1, 26);
        monsters[2].changeField(game, 25, 1);
        monsters[3].changeField(game, 25, 26);

        pacman.changeField( game, 12, 13);
    }

    initScoreText(){
        this.scoreBoard = document.createElement("DIV");
        document.querySelector('.map').appendChild(this.scoreBoard);
        this.scoreBoard.classList.add('scoreDIV');

        this.scoreText = document.createElement("H1");
        document.querySelector('.scoreDIV').appendChild(this.scoreText);
        this.updateScore();
    }

    initEndGameText(){
        this.endGameBoard = document.createElement("DIV");
        document.querySelector('.map').appendChild(this.endGameBoard);
        this.endGameBoard.classList.add('endGameDIV');

        this.endGameText = document.createElement("H1");
        document.querySelector('.endGameDIV').appendChild(this.endGameText);
    }

    updateScore(){
        this.scoreText.innerHTML = "SCORE: " + this.score;

        if(this.pelletCount % 20 === 0 && this.pelletCount !== 0) {
            this.map[1][1].powerpellet = new PowerPellet();
            this.map[1][1].powerpellet.changeField(this, 1, 1);
        }

        if(this.pelletCount === 0)
            this.endGameText.innerHTML = "YOU WON!";
    }

    endGame(){
        this.endGameText.innerHTML = "YOU LOST!";
    }
}

class Field{
    constructor( x, y, type){
        this.x = x;
        this.y = y;
        this.type = type;

        this.pellet = null;
        this.powerpellet = null;

        this.data = document.createElement("DIV");
        document.querySelector('.map').appendChild(this.data);
        this.data.classList.add('basicObject');
        this.data.classList.add(this.type);

        this.data.style.left = x + 'px';
        this.data.style.top = y + 'px';
    }

    getMapCoordX(map){
        for(let i = 0; i < map.length; i++){
            for(let j = 0; j < map[i].length; j++){
                if(map[i][j].x === this.x && map[i][j].y===this.y){
                    return j;
                }
            }
        }
    }

    getMapCoordY(map){
        for(let i = 0; i < map.length; i++){
            for(let j = 0; j < map[i].length; j++){
                if(map[i][j].x === this.x && map[i][j].y===this.y){
                    return i;
                }
            }
        }
    }
}

class Thing{
    constructor() {
        this.x = 0;
        this.y = 0;

        this.XX = 0;
        this.YY = 0;

        this.field = null;

        this.data = document.createElement("DIV");
        document.querySelector('.map').appendChild(this.data);
        this.data.classList.add('basicObject');

    }
    changeCoord(x,y){
        this.x = x;
        this.y = y;

        this.data.style.left = x + 'px';
        this.data.style.top = y + 'px';
    }

    changeField(game, mapRow, mapColumn){
        this.field = game.map[mapRow][mapColumn];
        this.changeCoord(game.map[mapRow][mapColumn].x, game.map[mapRow][mapColumn].y);
    }

    move(game, direction){
        let currentColumn = this.field.getMapCoordX(game.map);
        let currentRow = this.field.getMapCoordY(game.map);
        if(direction==='up'){
            if(game.map[currentRow - 1][currentColumn].type === 'empty') {
                this.changeField(game, currentRow - 1, currentColumn);
                return true;
            }
        }
        if(direction==='right'){
            if(game.map[currentRow][currentColumn + 1].type === 'empty') {
                this.changeField(game, currentRow, currentColumn + 1);
                return true;
            }
        }
        if(direction==='down'){
            if(game.map[currentRow + 1][currentColumn].type === 'empty') {
                this.changeField(game, currentRow + 1, currentColumn);
                return true;
            }
        }
        if(direction==='left'){
            if(game.map[currentRow][currentColumn - 1].type === 'empty') {
                this.changeField(game, currentRow, currentColumn - 1);
                return true;
            }
        }
        return false;
    }

    hitWithPellet(game){}

    hitWithPowerPellet(game){}

    hitWithMonster(game){}

    checkIfEmpty(game, direction){
        let currentColumn = this.field.getMapCoordX(game.map);
        let currentRow = this.field.getMapCoordY(game.map);
        if(direction==='up'){
            if(game.map[currentRow - 1][currentColumn].type === 'empty') {
                return true;
            }
        }
        if(direction==='right'){
            if(game.map[currentRow][currentColumn + 1].type === 'empty') {
                return true;
            }
        }
        if(direction==='down'){
            if(game.map[currentRow + 1][currentColumn].type === 'empty') {
                return true;
            }
        }
        if(direction==='left'){
            if(game.map[currentRow][currentColumn - 1].type === 'empty') {
                return true;
            }
        }
        return false;
    }
}

class Pellet extends Thing{
    constructor() {
        super();
        this.data.classList.add('pellet');
        this.data.style.backgroundImage = "url('images/pellet.png')";
    }
}

class PowerPellet extends Thing{
    constructor() {
        super();
        this.data.classList.add('powerpellet');
        this.data.style.backgroundImage = "url('images/powerpellet.png')";
    }
}

class Pacman extends Thing{
    constructor() {
        super();
        this.lives = 3;
        this.data.classList.add('pacman');

        this.setPic("right");
    }

    setPic(direction){
        this.image = "url('images/pac_" + direction + ".gif')";

        this.data.style.backgroundImage = this.image;
    }

    hitWithPowerPellet(game){
        if(this.field.powerpellet != null){
            this.field.powerpellet.data.style.backgroundImage = "none";
            this.field.powerpellet = null;

            for(let i = 0; i < monsters.length; i++) {
                monsters[i].state = 'frightened';
                monsters[i].setPic('frightened');
            }
            setTimeout(function(){
                    for(let i = 0; i < monsters.length; i++) {
                        monsters[i].state = 'normal';
                        monsters[i].setPic('right');
                    }
                }, 10000);
        }
    }

    hitWithPellet(game) {
        if(this.field.pellet != null){
            game.score++;
            game.pelletCount--;
            game.updateScore();
            this.field.pellet.data.style.backgroundImage = "none";
            this.field.pellet = null;
        }
    }

    hitWithMonster(game) {
        for(let i = 0; i < monsters.length; i++){
            if(monsters[i].field.x === this.field.x &&  monsters[i].field.y === this.field.y ){
                if(monsters[i].state === 'normal'){
                    if(this.lives === 1) {
                        this.lives--;
                        game.endGame();
                    }
                    else{
                        this.lives--;
                        this.changeField(game, 12, 13);
                    }
                }
                else if(monsters[i].state === 'frightened'){
                    game.score += 20;
                    monsters[i].state = "dead";
                    monsters[i].setPic('');
                    game.updateScore();
                    monsters.splice(i, 1);
                }
            }
        }
    }
}

class Cell  {
    constructor(x, y, dist, prev) {
        this.x = x;
        this.y = y;
        this.dist = dist; //distance
        this.prev = prev; //parent cell in the path
    }

    toString() {
        return "(" + this.x + ", " + this.y + ")";
    }
}

class PathFinder{
    shortestPath(matrix, startX, startY, destX, destY) {
        let sx = startX;
        let sy = startY;
        let dx = destX;
        let dy = destY;

        let m = matrix.length;
        let n = matrix[0].length;
        let cells = [];

        for (let i = 0; i < m; i++) {
            cells[i] = [];
            for (let j = 0; j < n; j++) {
                if (matrix[i][j].type === 'empty') {
                    cells[i][j] = new Cell(i, j, Number.MAX_VALUE, null);
                }
            }
        }
        //BFS
        let queue = [];
        let src = cells[sx][sy];
        if(src !== null && src !== undefined)
            src.dist = 0;
        queue.push(src);
        let dest = null;
        let p;
        while ((p = queue.shift()) != null) {
            if (p.x === dx && p.y === dy) {
                dest = p;
                break;
            }
            this.visit(cells, queue, p.x-1, p.y, p);    //UP
            this.visit(cells, queue, p.x, p.y-1, p);    //LEFT
            this.visit(cells, queue, p.x+1, p.y, p);    //DOWN
            this.visit(cells, queue, p.x, p.y+1, p);    //RIGHT
        }

        if (dest == null) {
            console.log("there is no path.");
            return '';
        } else {
            let path = [];
            p = dest;
            do {
                path.unshift(p);
            } while ((p = p.prev) != null);
            if(colorRoute) {
                for (let i = 0; i < path.length; i++)
                    matrix[path.at(i).x][path.at(i).y].data.style.backgroundColor = "#444";
            }

            let x = path.at(1).x;
            let y = path.at(1).y;

            if( x < startX && y === startY)
                return 'up';
            else if(x > startX && y === startY)
                return 'down';
            else if(y < startY && x === startX)
                return 'left';
            else if(y > startY && x === startX)
                return 'right';
            return 'up';
        }
    }

    visit(cells, queue, x, y, parent) {
        if (cells[x][y] == null)
            return;

        //update distance and previous node
        let dist = parent.dist + 1;
        let p = cells[x][y];
        if (dist < p.dist) {
            p.dist = dist;
            p.prev = parent;
            queue.push(p);
        }
    }
}

class Monster extends Thing{
    constructor(type) {
        super();
        this.data.classList.add('monster');
        this.prevDir = '';
        this.type = type;

        this.moved = true;
        this.moved2 = false;

        this.state = 'normal';

        this.setPic('right');
    }

    setPic(direction){
        if(this.state === 'normal')
            this.image = "url('images/" + this.type + "_" + direction + ".gif')";
        else if(this.state === 'frightened')
            this.image = "url('images/frightened.gif')";
        else if(this.state === 'dead')
            this.image = "none";
        this.data.style.backgroundImage = this.image;
    }

    moveLogic(game, pacman){
        let pF = new PathFinder();

        let startRowIndex = this.field.getMapCoordY(game.map);
        let startColIndex = this.field.getMapCoordX(game.map);

        let destRowIndex = pacman.field.getMapCoordY(game.map);
        let destColIndex = pacman.field.getMapCoordX(game.map);

        if(this.state === 'frightened') {
            destRowIndex = game.map.length - 2;
            destColIndex = game.map[0].length - 2;
        }

        let dirToGo = pF.shortestPath(game.map, startRowIndex, startColIndex, destRowIndex, destColIndex);

        if(dirToGo !== '') {
            this.move(game, dirToGo);
            this.setPic(dirToGo);
        }
    }
}

const game = new Game();

game.initBasicSetup();

setInterval(function (){
    for(let i = 0; i < game.map.length; i++){
        for(let j = 0; j < game.map[0].length; j++){
            if(game.map[i][j].type === 'empty')
                game.map[i][j].data.style.backgroundColor = "black";
        }
    }

    if(pacman.lives > 0 && game.pelletCount > 0) {
        for(let i = 0; i < monsters.length; i++)
            monsters[i].moveLogic(game, pacman);
        pacman.hitWithMonster(game);
    }
}, 500);

window.addEventListener('keyup', (e) =>{
    if(pacman.lives > 0 && game.pelletCount > 0) {
        switch (e.key) {
            case 'ArrowLeft':
                pacman.setPic("left");
                pacman.move(game, 'left');
                break;
            case 'ArrowRight':
                pacman.setPic("right");
                pacman.move(game, 'right');
                break;
            case 'ArrowUp':
                pacman.setPic("up");
                pacman.move(game, 'up');
                break;
            case 'ArrowDown':
                pacman.setPic("down");
                pacman.move(game, 'down');
                break;
            case 'c':
                monsters[monsters.length-1].state = 'dead';
                monsters[monsters.length-1].data.style.backgroundImage = 'none';
                monsters.pop();
                break;
            case ' ':
                if(colorRoute)
                    colorRoute = false;
                else
                    colorRoute = true;
                break;
            default:
                break;
        }
        pacman.hitWithPellet(game);
        pacman.hitWithPowerPellet(game);
        pacman.hitWithMonster(game);
    }
});

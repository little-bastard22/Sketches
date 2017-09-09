var allUnits = [];

//creates a gun object for testing
function Mage(spellLevel) {
    this.spellLevel = spellLevel;
    this.pos = new createVector(0, 0); //creates p5.js vector
}

//defines a soldier object for testing
function Enemy(id) {




    //limits for spawning enemies
    var minposx = -350;
    var maxposx = 350;
    var minposy = -250;
    var maxposy = 250;
    //enemy is given random coordinates
    var posx = Math.random() * (maxposx - minposx) + minposx;
    var posy = Math.random() * (maxposy - minposy) + minposy;


    this.name = "Enemy " + id;
    this.pos = new createVector(posx, posy);
    this.maxHP = 50;
    this.curHP = this.maxHP;
    this.effect = 0;
    this.isDead = false;
    this.distance = p5.Vector.dist(this.pos, badassMage.pos);
}

//populates surroundings by enemies
function createEnemies() {
    for (i = 0; i < 10; i++) {
        newSold = new Enemy(i);
        allUnits.push(newSold);
    }
}

/*
  Enemy object generator, adds basic attributes, contains Kill and
  AddDamage methods.
*/

function Enemy(id) {

    //limits for spawning enemies
    var minposx = -350;
    var maxposx = 350;
    var minposy = -250;
    var maxposy = 250;
    //enemy is given random coordinates
    var posx = random(minposx, maxposx);
    var posy = random(minposy, maxposy);

    this.name = "Enemy " + id;
    this.pos = new createVector(posx, posy); //creates p5 pos vector
    this.maxHP = 50;
    this.curHP = this.maxHP; //sets starting HP to max
    this.isDead = false;
    this.distance = p5.Vector.dist(this.pos, badassMage.pos); //adds distance to mage

    this.Kill = function()
    {
      this.isDead = true;
      // console.log(this.name + " died");
    }

    //Adds damage to enemy, if HP < 0, kills the enemy.
    this.AddDamage = function(damage)
    {
      this.curHP -= damage;
      if (this.curHP <= 0)
      {
        this.Kill();
      }
    }
}

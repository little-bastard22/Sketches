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
    this.isDead = false;
    this.distance = p5.Vector.dist(this.pos, badassMage.pos);

    this.Kill = function()
    {
      this.isDead = true;
    }

    this.AddDamage = function(damage)
    {
      this.curHP -= damage;
      if (this.curHP <= 0)
      {
        Kill(soldier);
      }
    }
}
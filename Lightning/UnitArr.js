function UnitArr()
{
  this.arr = new Array();

  this.createEnemies = function()
  {
    this.arr = [];
    for (i = 0; i < 40; i++)
    {
      newEnemy = new Enemy(i);
      this.arr.push(newEnemy);
    }
  }

  this.sortUnits = function(originUnit)
  {
    for (i = this.arr.length-1; i>=0; i--)
    {
      var unit = this.arr[i];
      unit.distance = p5.Vector.dist(unit.pos, originUnit.pos);
      if (unit.isDead == true)
      {
        this.arr.splice(i, 1);
      }
    }

    this.arr.sort(function(a, b) {
      return parseFloat(a.distance) - parseFloat(b.distance);
    });
    return this.arr;
  }
}

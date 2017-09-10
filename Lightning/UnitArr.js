function UnitArr()
{
  this.arr = new Array();

  this.createEnemies = function()
  {
      for (i = 0; i < 10; i++)
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
        console.log(unit.name + " died");
      }
    }

    this.arr.sort(function(a, b) {
      return parseFloat(a.distance) - parseFloat(b.distance);
    });
    return this.arr;
  }
}

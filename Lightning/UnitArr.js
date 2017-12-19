/*
  Defines array of units and its methods - enemy generator and sorting
  method.
*/

function UnitArr()
{
  this.arr = new Array();

  // creates 40 enemy objects and adds them into the array
  this.createEnemies = function()
  {
    this.arr = [];
    for (i = 0; i < 40; i++)
    {
      newEnemy = new Enemy(i);
      this.arr.push(newEnemy);
    }
  }


  //sorts units in the array by dist to origin, removes dead units
  this.sortUnits = function(originUnit)
  {
    for (i = this.arr.length-1; i>=0; i--)
    {
      var unit = this.arr[i];
      //if the unit is dead, splices it from the array
      if (unit.isDead == true)
      {
        this.arr.splice(i, 1);
      }
      // if not dead, calculate its distance to origin
      else
      {
        unit.distance = p5.Vector.dist(unit.pos, originUnit.pos); //sets dist
      }



    }

    //sort the array by distance to object
    this.arr.sort(function(a, b) {
      return parseFloat(a.distance) - parseFloat(b.distance);
    });
    return this.arr;
  }
}

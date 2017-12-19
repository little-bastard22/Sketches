/*
Mage object generator, includes castSpell and damage Calculator methods.
*/

function Mage(spellLevel) {
    this.spellLevel = spellLevel; //spell level of the spell cast
    this.pos = new createVector(0, 0); //creates p5.js vector

    //handles casting the spell and targeting
    this.castSpell = function()
    {
        var orderArr = []; //order in which the enemies were hit, for visua
        var maxTargets = this.spellLevel*2; //max ammount of targets to hit
        var livingUnits = new UnitArr; //array of valid targets
        livingUnits.arr = allUnits.arr.slice(); //creates a copy of allUnits
        var targetsHit = 0; //control variable for target selection
        var lastTarget = this; //sets last target to mage for dist calculation
        var lastDmg = 12*this.spellLevel; //sets base damage for first target
        livingUnits.sortUnits(lastTarget); //sorts units by dist, removes dead

        // chooses targets until all dead or limit reached
        while (targetsHit < maxTargets && livingUnits.arr.length > 0)
        {
          // if there is more than 4 targets, choose randomly from first 4
          if (livingUnits.arr.length >= 4)
          {
            targetIndex = chooseTarget();
          }

          //if less than 4, choose the closest enemy
          else
          {
            targetIndex = 0;
          }

          lastTarget = livingUnits.arr[targetIndex]; //change ref to chosen target
          orderArr.push(lastTarget); //push last target to order arr
          lastTarget.AddDamage(this.damageCalculator(lastDmg)); //adds damage
          lastDmg = Math.ceil(lastDmg/1.1); //lowers the damage slightly for next target
          livingUnits.arr.splice(targetIndex, 1); //removes hit unit from valid targets
          livingUnits.sortUnits(lastTarget); //sorts by dist to lastTarget
          ++targetsHit; //increment
        }
        //returns the array for visualisation
        return orderArr;
    }

    //calculates damage by simple formula
    this.damageCalculator = function(dmg)
    {
      return round(random(dmg*0.5, dmg*1.5));
    }
}

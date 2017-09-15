function Mage(spellLevel) {
    this.spellLevel = spellLevel;
    this.pos = new createVector(0, 0); //creates p5.js vector

    this.castSpell = function()
    {
        var orderArr = [];
        var maxTargets = this.spellLevel*2;
        var livingUnits = new UnitArr;
        livingUnits.arr = allUnits.arr.slice();
        var targetsHit = 0;
        var lastTarget = this;
        var lastDmg = 12*this.spellLevel;
        livingUnits.sortUnits(lastTarget);
        console.log(livingUnits.arr.length);
        while (targetsHit <= maxTargets && livingUnits.arr.length > 0)
        {
          if (livingUnits.arr.length >= 4)
          {
            targetIndex = chooseTarget();
          }
          else
          {
            targetIndex = 0;
          }
          lastTarget = livingUnits.arr[targetIndex];
          orderArr.push(lastTarget);
          lastTarget.AddDamage(this.damageCalculator(lastDmg));
          lastDmg = Math.ceil(lastDmg/1.1);
          livingUnits.arr.splice(targetIndex, 1);
          livingUnits.sortUnits(lastTarget);
          ++targetsHit;
        }
        console.log(orderArr.length);
        return orderArr;
    }

    this.damageCalculator = function(dmg)
    {
      return round(random(dmg*0.5, dmg*1.5));
    }
}

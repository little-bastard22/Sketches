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
        var lastDmg = 25*this.spellLevel;
        livingUnits.sortUnits(lastTarget);
        while (targetsHit < maxTargets)
        {
          if (livingUnits.arr.length >= 4)
          {
            lastTarget = livingUnits.arr[chooseTarget()];
          }
          else
          {
            lastTarget = livingUnits.arr[0];
          }
          orderArr.push(lastTarget);
          lastTarget.AddDamage(lastDmg);
          lastDmg = Math.ceil(lastDmg/1.5);
          livingUnits.sortUnits(lastTarget);
          livingUnits.arr.shift();
          ++targetsHit;
          if (targetsHit >= allUnits.arr.length)
          {
            break;
          }
        }
        return orderArr;
    }
}

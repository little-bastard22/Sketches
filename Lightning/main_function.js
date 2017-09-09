function addDamage(soldier, damage)
{
  soldier.curHP = soldier.curHP - damage;
  if (soldier.curHP <= 0)
  {
    Kill(soldier);
  }
}


function Kill(unit)
{
  unit.isDead = true;
}


function sortUnitArr(unitArr, originUnit)
{
  for (i = unitArr.length-1; i>=0; i--)
  {
    var unit = unitArr[i];
    unit.distance = p5.Vector.dist(unit.pos, originUnit.pos);
    if (unit.isDead == true)
    {
      unitArr.splice(i, 1);
      console.log(unit.name + " died");
    }
  }

  unitArr.sort(function(a, b) {
    return parseFloat(a.distance) - parseFloat(b.distance);
  });
  return unitArr;
}

function chooseTarget()
{
  ctr = Math.random();
  if (ctr < 0.1)
  {
    return 3;
  } else if (ctr < 0.2) {
    return 2;
  }else if (ctr < 0.4) {
    return 1;
  }else {
    return 0;
  }
}


function castSpell(mage){
    var orderArr = [];
    var maxTargets = mage.spellLevel*2;
    var livingUnits = allUnits.slice();
    var targetsHit = 0;
    var lastTarget = mage;
    var lastDmg = 25;
    livingUnits = sortUnitArr(livingUnits, lastTarget);
    while (targetsHit < maxTargets)
    {
      if (livingUnits.length >= 4)
      {
        target = chooseTarget();
      }
      else
      {
        target = 0;
      }
      if (p5.Vector.dist(lastTarget.pos, livingUnits[target].pos) >= p5.Vector.dist(mage.pos, livingUnits[target].pos))
      {
        lastTarget = livingUnits[0];
      }
      else
      {
        lastTarget = livingUnits[target];
      }
      orderArr.push(lastTarget);
      addDamage(lastTarget, lastDmg);
      lastDmg = Math.ceil(lastDmg/1.5);
      livingUnits.shift();
      livingUnits = sortUnitArr(livingUnits, lastTarget);
      ++targetsHit;
      if (targetsHit >= allUnits.length)
      {
        break;
      }
    }
    return orderArr;
}

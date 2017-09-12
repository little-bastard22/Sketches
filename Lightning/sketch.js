/// <reference path="libraries/p5.js" />
/// <reference path="main_function.js" />

//p5.js function that is executed on init
j = 1;

function setup()
{
  createCanvas(800, 600);
  background(255);
  spellLevel = 7;
  badassMage = new Mage(spellLevel);
  allUnits = new UnitArr;
  allUnits.createEnemies();
  translate(400, 300);
  fill(255, 255, 255, 100);
  stroke(0);
  ellipse(badassMage.pos.x, badassMage.pos.y, 40, 40);
  for (i = 0; i < allUnits.arr.length; i++) {
    push();
    fill(255,100,100);
    enemy = allUnits.arr[i];
    ellipse(enemy.pos.x, enemy.pos.y, 30, 30);
    stroke(0,0,0,0);
    fill(255,255,255);
    text(enemy.curHP, enemy.pos.x - 7, enemy.pos.y + 7);
    pop();
  }
  orderArr = badassMage.castSpell();
}


//p5.js function that draws the image
function draw()
{
  // noLoop();
  translate(400, 300);
  if( frameCount % 6 == 0 && j < orderArr.length)
  {
    if (j == 1)
    {
      draw_enemy(orderArr[0]);
    }
    push();
    stroke(0,0,255);
    lastEnemy = orderArr[j-1];
    enemy = orderArr[j];
      x = lastEnemy.pos.x;
      y = lastEnemy.pos.y;
      x1 = enemy.pos.x;
      y1 = enemy.pos.y;
      line(x,y,x1,y1);
      draw_enemy(enemy);
    pop();
    ++j;
  }
}

function draw_enemy(enemy)
{
  push();
    stroke(0,0,0,0);
    if (enemy.curHP <=0)
    {
      fill(0);
    } else
    {
      fill(0,0,255);
    }
    ellipse(enemy.pos.x, enemy.pos.y, 30, 30);
    fill(255);
    text(enemy.curHP, enemy.pos.x - 6, enemy.pos.y + 6);
  pop()
}

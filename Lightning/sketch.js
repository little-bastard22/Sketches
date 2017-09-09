/// <reference path="libraries/p5.js" />
/// <reference path="main_function.js" />

//p5.js function that is executed on init
function setup()
{
  createCanvas(800, 600);
  background(255);
  spellLevel = 3;
  badassMage = new Mage(spellLevel);
  createEnemies();
  orderArr = castSpell(badassMage);
}



//p5.js function that draws the image
function draw()
{
  noLoop();
  translate(400, 300);
  fill(255, 255, 255, 100);
  ellipse(badassMage.pos.x, badassMage.pos.y, 40, 40);
  fill(0);
  for (i = 0; i < allUnits.length; i++) {
      enemy = allUnits[i];
      ellipse(enemy.pos.x, enemy.pos.y, 30, 30);
      fill(255,100,100);
      text(enemy.curHP, enemy.pos.x + 10, enemy.pos.y + 10);
  }
  stroke(0,0,255);
  for (i = 0; i < orderArr.length - 1; i++)
  {
    x = orderArr[i].pos.x;
    y = orderArr[i].pos.y;
    x1 = orderArr[i+1].pos.x;
    y1 = orderArr[i+1].pos.y;
    line(x,y,x1,y1);
  }
}

/// <reference path="libraries/p5.js" />
/// <reference path="main_function.js" />

//p5.js function that is executed on init
j = 1;

function setup()
{
  spellLevel = 7;
  badassMage = new Mage(spellLevel);
  allUnits = new UnitArr;
  button = createButton('reset');
  button.position(19, 19);
  button.mousePressed(reset);
  button = createButton('recast');
  button.position(80, 19);
  button.mousePressed(recast);
  createCanvas(800, 600);
  background(255);
  translate(400, 300);
  reset();
}

//p5.js function that draws the image
function draw()
{
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
      }
      else if (enemy.curHP == enemy.maxHP)
      {
        fill(0,200,100);
      }
      else
      {
        fill(255,100,100);
      }
    ellipse(enemy.pos.x, enemy.pos.y, 30, 30);
    fill(255);
    text(enemy.curHP, enemy.pos.x - 6, enemy.pos.y + 6);
  pop()
}

function reset()
{
  j = 1;
  background(255);
  allUnits.createEnemies();
  fill(255, 255, 255, 100);
  stroke(0);
  ellipse(badassMage.pos.x, badassMage.pos.y, 40, 40);
  for (i = 0; i < allUnits.arr.length; i++) {
    enemy = allUnits.arr[i];
    draw_enemy(enemy);
  }
  orderArr = badassMage.castSpell();
}

function recast()
{
  j = 1;
  background(255);
  for (i = 0; i < allUnits.arr.length; i++) {
    enemy = allUnits.arr[i];
    draw_enemy(enemy);
  }
  orderArr = badassMage.castSpell();
}

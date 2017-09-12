/// <reference path="libraries/p5.js" />
/// <reference path="main_function.js" />

//p5.js function that is executed on init
j = 0;

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
  if( frameCount % 6 == 0 && j < orderArr.length-1)
  {
    push();
    enemy = orderArr[j];
    nextEnemy = orderArr[j+1];
      x = enemy.pos.x;
      y = enemy.pos.y;
      x1 = nextEnemy.pos.x;
      y1 = nextEnemy.pos.y;
        push();
          stroke(0,0,255);
          fill(0,0,255)
          line(x,y,x1,y1);
          if (j == 0)
          {
            ellipse(enemy.pos.x, enemy.pos.y, 30, 30);
            push()
              stroke(0,0,0,0);
              fill(255);
              text(enemy.curHP, enemy.pos.x - 7, enemy.pos.y + 7);
            pop()
          }
          ellipse(nextEnemy.pos.x, nextEnemy.pos.y, 30, 30);
        pop()
      stroke(0,0,0,0);
      fill(255);
      text(nextEnemy.curHP, nextEnemy.pos.x - 7, nextEnemy.pos.y + 7);
      ++j;
    pop();
  }
}

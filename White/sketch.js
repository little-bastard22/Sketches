/// <reference path="libraries/p5.js" />
/// <reference path="main_function.js" />

//p5.js function that is executed on init


var shift = 0;
var lineWidth = 0;
var c;
var shiftSlider, widthSlider, speedSlider;



function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(255);

  shiftSlider = createSlider(0, 255, 20, 1);
  shiftSlider.position(20, 20);
  widthSlider = createSlider(1, 100, 10, 1);
  widthSlider.position(20, 50);
  speedSlider = createSlider(48, 54, 54, 1);
  speedSlider.position(20, 80);
}



//p5.js function that draws the image
function draw()
{
  // noLoop();
  refresh = 60 - speedSlider.value();
  if( frameCount % refresh == 0)
  {
    c = color(255, 255, 255);
    shift = shiftSlider.value();
    lineWidth = widthSlider.value();
    for (i = 0; i < windowHeight; i++)
    {
      if ( i % lineWidth == 0 )
      {
        c = color(255 - random(shift), 255 - random(shift), 255 - random(shift));
      }
      stroke(c);
      line(0, i, windowWidth, i);
      if (i == 500)
      {
        o = 8;
      }
    }
  }
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}

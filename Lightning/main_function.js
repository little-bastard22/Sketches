function chooseTarget()
{
  ctr = Math.random();
  if (ctr < 0.1)
  {
    return 3;
  } else if (ctr < 0.3) {
    return 2;
  }else if (ctr < 0.5) {
    return 1;
  }else {
    return 0;
  }
}

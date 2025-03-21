function setup() {
    createCanvas(600, 500);
  }
  let olhoX;
  let olhoY;
  
  function draw() {
    background("purple");
    fill("#FFDE7D");
    circle(200, 200, 310); // rosto
    fill("white");
    circle(150, 150, 60); // olho esquerdo
    circle(250, 150, 60); // olho direito
    line(150, 270, 250, 235); // boca
    fill("black");
    triangle(110, 150, 160, 210, 210, 210); // nariz
    line(123, 115, 178, 113); // sobrancelha esquerda
    line(225, 116, 279, 106); // sobrancelha direita
    // circle(150,150,10); // pupila esquerda
    //circle(250,150,10); // pupila direita
  
    olhoX = map(mouseX, 0, 400, 130, 170);
    olhoY = map(mouseY, 0, 400, 130, 170);
  
    circle(olhoX, olhoY, 10); // nova pupila esquerda
    circle(olhoX + 100, olhoY, 10); //nova pupila direita
    if (mouseIsPressed) {
      console.log(mouseX, mouseY);
    }
  }
  
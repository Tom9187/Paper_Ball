class paper {
    constructor(x, y){
var options = {
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = 100;
this.height = 100;
this.image = loadImage("paper.png")
World.add(world, this.body);
}
display(){
  var pos = this.body.position
  push();
  translate(this.body.position.x, this.body.position.y);
  imageMode(CENTER);
  image(this.image, 0, 0, this.width, this.height);
  pop();
}
    }
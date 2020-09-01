class Plinko {
    constructor(x, y, radius){
    var options ={
     isStatic: true
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world,this.body);
}
display(){
    var position = this.body.position;
    fill("blue");
    ellipse(position.x, position.y, this.radius, this.radius);
}

 
}
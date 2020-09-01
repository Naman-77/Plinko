class Circle{
    constructor(x, y, radius){
        var options={
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 10);
        World.add(world, this.body);
         this.radius = 10;
         
}
    
    display(){
        var position = this.body.position;
        fill("green");
        ellipse(position.x, position.y, this.radius, this.radius);
}

}
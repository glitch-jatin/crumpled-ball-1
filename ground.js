class Ground {

    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(x,y,width,height , options);
        this.body.width=width;
        this.body.height=height;
        World.add(world, this.body);
    }

display(){
   

    rectMode(CENTER);
    strokeWeight(4);
    stroke("yellow");
    fill(255);
    rect(this.body.position.x,this.body.position.y, this.width,this,height);
    
}


}
class Ground{

    constructor(x,y,w,h){

       var g_op={
            isStatic:true,
        };

        this.body=Bodies.rectangle(x,y,w,h,g_op)
        this.w=w;
        this.h=h;
        World.add(world,this.body)

    }

    display(){
        push()
        fill("yellow")
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
        pop()

    }
}
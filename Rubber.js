class Rubber{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			friction:5,
			density:1
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, ________)
		World.add(_____________);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(__________);
			rectMode(________)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(_________________);
			pop()
	}

}
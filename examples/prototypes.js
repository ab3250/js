const grid = function (x, y){
	this.x = x
	this.y = y
	grid.prototype.move = function move(dx,dy){
		this.x+=dx
		this.y+=dy
	}
	grid.prototype.show = function show(){
		console.log(this.x)
		console.log(this.y)
	}	
}	
const tgrid=new grid(2,3)
tgrid.move(2,2)
tgrid.show()


// import world objects


// terrain
// create a few blocks
const WORLD_WIDTH = window.innerWidth;
const WORLD_HEIGHT = window.innerHeight;

// objects in the world ( in view )
// objects in the world ( not in view )

class World {
	constructor() {
		this._world = document.getElementById("canvas");
		this._world.width = WORLD_WIDTH;
		this._world.height = WORLD_HEIGHT;

		this._context = this._world.getContext("2d");
		this.addGround();
	}
	
	// fill the ground of the world
	addGround () {
		// 0 to x, ground is filled in
		this._context.fillStyle = 'rgba(0, 0, 200, 0.5)';
		this._context.fillRect(0,WORLD_HEIGHT-25,WORLD_WIDTH,25);
	}

	// for i in array, draw rectangles centered at ( x, y )
	// must sit above the ground
	addObstacles () {

	}

	// check collision
	// if bound of box are touched by player, then player doesn't move
	// map of all bounds of boxes, whenever player moves, check against the obstacle

	drawRectangle (x,y) {
		this._context.fillStyle = 'rgba(100, 0, 200, 0.5)';
		this._context.fillRect(x,y,200,200);
	}

	getHeight () {
		return this._world.height;
	}
	getWidth () {
		return this._world.width;
	}

	drawPlayer(player) {
		//draw player
		this._context.fillStyle = 'rgba(100, 0, 200, 0.5)';
		this._context.fillRect(player.getX(),player.getY(),25,25);
	}

}

export { World }

//

// import world objects


// terrain
// create a few blocks
const WORLD_WIDTH = window.innerWidth;
const WORLD_HEIGHT = window.innerHeight;

const WORLD_GROUND_COORD_X = 0;
const WORLD_GROUND_HEIGHT = 25;
const WORLD_GROUND_COORD_Y = WORLD_HEIGHT-WORLD_GROUND_HEIGHT;

// objects in the world ( in view )
// objects in the world ( not in view )

class World {
	constructor() {
		this._world = document.getElementById("canvas");
		this._world.width = WORLD_WIDTH;
		this._world.height = WORLD_HEIGHT;
		this._ground_coord_x = WORLD_GROUND_COORD_X;
		this._ground_coord_y = WORLD_GROUND_COORD_Y;

		this._context = this._world.getContext("2d");
	}
	
	// for i in array, draw rectangles centered at ( x, y )
	// must sit above the ground
	addObstacles () {

	}

	// check collision
	// if bound of box are touched by player, then player doesn't move
	// map of all bounds of boxes, whenever player moves, check against the obstacle

}

export { World }

//

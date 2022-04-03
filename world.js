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

		this._obstacles = Array();
		this._context = this._world.getContext("2d");
	}
	
	//add 'n' obstacles
	addObstacles (n) {
		// for i in array, draw rectangles centered at ( x, y )
		while ( n-- )
			this._obstacles.push(new Obstacle((n * 300 )/2,WORLD_HEIGHT-100,50,20));


	}

	// just a special type of obstacle
	addGround () {
		this._obstacles.push(new Obstacle(this._ground_coord_x, this._ground_coord_y, this._world.width, this._world.width - this._ground_coord_y ));
	}

	//TODO: player movement should be setting next position to current position, if not collision issues
	movePlayer( player )
	{
		//doesn't need to be checked everytime, can fix
		if ( ( player._position.y + player._height ) < this._ground_coord_y )
		{
			this.gravity( player );
		}

		this._obstacles.forEach( ( obstacle ) => {
			this.collisions( obstacle, player );
		});

	}

	gravity ( player )
	{
		// if player is jumping up
		switch ( player._jumping )
		{
			case 1:
				player._vxy.vy *= .90;
				player._position.y -= player._vxy.vy;
				//check collisions
				if ( player._vxy.vy < 0.10 )
					player._jumping = 0;
				break;
			//else player is falling down
			case 0:
				player._vxy.vy *= 1.10;
				//check if were about to fall through the ground
				//TODO: eventually, the ground should just be made another object and handled by collision detection
				if( ( player._position.y + player._height + player._vxy.vy ) > this._ground_coord_y )
					player._position.y = this._ground_coord_y - player._height; // if so, set position to the ground
				else
					player._position.y += player._vxy.vy; // if not, keep going
				break;
		}
	}
	// rudimentary collision check
	// should mix with gravity
	// gravity sets potential next move, which is then checked against collisions
	// if player is moving up, check upper coordinates
	// if player is moving down, check lower bound of player
	// if bound of box are touched by player, then player doesn't move
	// map of all bounds of boxes, whenever player moves, check against the obstacle
	collisions ( obstacle, player )
	{
		//check player ( origin, origin )
		//should check next position and then take action
		if ( ( obstacle._x <= player._position.x ) && ( player._position.x <= ( obstacle._x + obstacle._width ) ) )
		{
			if ( ( obstacle._y <= player._position.y ) && ( player._position.y <= ( obstacle._y + obstacle._height ) ) )
			{
				console.log("collision at ( origin, origin )!");
			}
		}

		//check player ( origin, h )
		if ( ( obstacle._x <= player._position.x ) && ( player._position.x <= ( obstacle._x + obstacle._width ) ) )
		{
			if ( ( obstacle._y <= ( player._position.y + player._height ) ) && ( ( player._position.y + player._height ) <= ( obstacle._y + obstacle._height ) ) )
			{
				console.log("collision at ( origin, h )!");
			}
		}

		//check player ( w, origin )
		if ( ( obstacle._x <= ( player._position.x + player._width ) ) && ( ( player._position.x + player._width ) <= ( obstacle._x + obstacle._width ) ) )
		{
			if ( ( obstacle._y <= player._position.y ) && ( player._position.y <= ( obstacle._y + obstacle._height ) ) )
			{
				console.log("collision at ( w, origin )!");
			}

		}
		//check player ( w, h )
		if ( ( obstacle._x <= ( player._position.x + player._width ) ) && ( ( player._position.x + player._width ) <= ( obstacle._x + obstacle._width ) ) )
		{
			if ( ( obstacle._y <= ( player._position.y + player._height ) ) && ( ( player._position.y + player._height ) <= ( obstacle._y + obstacle._height ) ) )
			{
				console.log("collision at ( w, h )!");
			}
		}

	}

}

class Obstacle {
	constructor(x,y,w,h) {
		this._x = x;
		this._y = y;
		this._width = w;
		this._height = h;
	}
}

export { World }

//

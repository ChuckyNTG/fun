// create player


const VY = 3;
const VX = 3;
const PLAYER_HEIGHT = 25
const PLAYER_WIDTH = 10;

class Player {
	constructor (x,y) {
		this._position = { 'x': x, 'y': y - PLAYER_HEIGHT };
		// stage changes to position using this
		this._next_position = { 'x': this._position.x, 'y': this._position.y };
		// change in x and y direction
		this._vxy = { 'vx': VX, 'vy': VY };
		this._jumping = 0;
		this._height = PLAYER_HEIGHT;
		this._width = PLAYER_WIDTH;

	}

	playerAction (event)
	{
		// f to shoot
		console.log(event);
		switch ( event.keyCode ) {
			//up, jump
			case 38:
				this._vxy.vy = VY;
				if ( ! this._jumping )
				{
					//jump
					this._position.y -= this._vxy.vy;
					this._jumping = 1;
				}
				break;
			//down
			case 40:
				this._position.y += this._vxy.vy;
				break;

			//right
			case 39:
				this._position.x += this._vxy.vx;
				//this._running = 1;
				break;
			//left
			case 37:
				this._position.x -= this._vxy.vx;
					break;
		}
	}

}

export { Player };

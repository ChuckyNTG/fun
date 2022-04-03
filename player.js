// create player


const VY = 3;
const VX = 3;
const PLAYER_HEIGHT = 25
const PLAYER_WIDTH = 10;

class Player {
	constructor (x,y) {
		this._position_x = x;
		this._position_y = y - PLAYER_HEIGHT;
		this._next_pos = { 'x': x, 'y': y };
		//change in x direction
		this._vx = VX;
		//change in y direction
		this._vy = VY;
		this._jumping = 0;
		this._height = PLAYER_HEIGHT;
		this._width = PLAYER_WIDTH;

	}

	// on keydown
	movePlayer (event) {
		switch ( event.KeyCode ) {
			case 38:
			case 39:
				this._position_x += 2;
				break;
			case 37:
			case 40:
				this._position_x -= 2;
				break;
			// TODO: model gravity
			case 32:
				this._position_y += 5;
		}
	}


	shoot () {
		//projectile = new Projectile();
			// TODO: Projectile will iterate through projectiles and update them
		//projectiles[projectile];
	}

	playerAction (event)
	{
		// f to shoot
		console.log(event);
		if ( event.keyCode == 70 )
		{
			this.shoot();
		}
		else
		{
			// TODO: model gravity
			switch ( event.keyCode ) {
				//up, jump
				case 38:
					this._vy = VY;
					if ( ! this._jumping )
					{
						//jump
						this._position_y -= this._vy;
						this._jumping = 1;
					}
					break;
				//down
				case 40:
					this._position_y += this._vy;
					break;

				//right
				case 39:
					this._position_x += this._vx;
					//this._running = 1;
					break;
				//left
				case 37:
					this._position_x -= this._vx;
					break;
			}
		}
	}


}

export { Player };

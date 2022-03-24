// create player


const PLAYER_HEIGHT = 25
const PLAYER_WIDTH = 10;

class Player {
	constructor (x,y) {
		this._position_x = x;
		this._position_y = y;
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
				//up
				case 38:
					this._position_y -= 5;
					break;
				//down
				case 40:
					this._position_y += 5;
					break;

				//right
				case 39:
					this._position_x += 8;
					break;
				//left
				case 37:
					this._position_x -= 8;
					break;
			}
		}
	}

}

export { Player };

// create player

export const player = ( function () {
	const PLAYER_HEIGHT = 50;
	const PLAYER_WIDTH = 50;

	class Player {
		constructor(x,y) {
			this._position_x = x;
			this._position_y = y;
			this._context = document.getElementByID('canvas').getContext("2d");


			window.addEventListener('keydown', function(e) {
				playerAction(e);
			});
		}

		playerAction(event)
		{
			// f to shoot
			if ( event.KeyCode == 70 )
				shoot();
			else
				movePlayer();
		}
		// on keydown
		movePlayer(event) {
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

		getX() {
			return this._position_x;
		}
		getY() {
			return this._position_x;
		}
	}
})();

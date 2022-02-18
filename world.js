// import world objects


// terrain
// create a few blocks
export const world = ( function () {
		
		const WORLD_WIDTH = 1000;
		const WORLD_HEIGHT = 1000;
		
		class World {
			constructor() {
				this._world = document.getElementById("canvas");
				this._world.width = WORLD_WIDTH;
				this._world.height = WORLD_HEIGHT;

				this._context = this._world.getContext("2d");
				this.addGround();
			}
			
			addGround () {
				this._context.fillStyle = 'rgba(0, 0, 200, 0.5)';
				this._context.fillRect(WORLD_WIDTH/2,WORLD_HEIGHT-75,WORLD_WIDTH,50);
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

	return {
		World: World,
	};
})();
//

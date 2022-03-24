import {World} from './world.js';
import {Player} from './player.js';

var world;
var player;

window.addEventListener('DOMContentLoaded', () => {

	// initialize world objects
	world = new World();

	// initialize player
	player = new Player(world._ground_coord_x, world._ground_coord_y);

	//player.playerAction({ 'keycode': 3 } );
	//keydown and keyup 
	window.addEventListener( 'keydown', player.playerAction.bind(player) );
	//request animation frame
	window.requestAnimationFrame( main );
 }
);

function main() {
	clearWorld();
	drawWorld();
	drawPlayer();
	window.requestAnimationFrame( main );
}

function clearWorld() {
	world._context.clearRect(0,0,world._world.width,world._world.height);
}


function drawWorld () {
	// draw ground
	world._context.fillStyle = 'rgba(0, 0, 200, 0.5)';
	world._context.fillRect(world._ground_coord_x, world._ground_coord_y, world._world.width, world._world.width - world._ground_coord_y );
}
	
function drawPlayer () {
	//draw player on ground
	world._context.fillStyle = 'rgba(100, 0, 200, 0.5)';
	// if player is up in the air, then gravity takes effect
	if ( player._position_y < world._ground_coord_y )
	{
		player.gravity( world._ground_coord_y );
	}
	world._context.fillRect(player._position_x, player._position_y - player._height, player._width, player._height);
}

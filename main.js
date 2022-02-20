import {World} from './world.js';
import {Player} from './player.js';

var world;
var player;

window.addEventListener('DOMContentLoaded', () => {

	// initialize world objects
	world = new World();

	// initialize player
	player = new Player(world._ground_coord_x, world._ground_coord_y);

	drawWorld();
	drawPlayer();

	//request animation frame
 }
);

function drawWorld () {
	// draw ground
	world._context.fillStyle = 'rgba(0, 0, 200, 0.5)';
	world._context.fillRect(world._ground_coord_x, world._ground_coord_y, world._world.width, world._world.width - world._ground_coord_y );
}
	
function drawPlayer () {
	//draw player on ground
	world._context.fillStyle = 'rgba(100, 0, 200, 0.5)';
	world._context.fillRect(player._position_x, player._position_y - player._height, player._width, player._height);
}

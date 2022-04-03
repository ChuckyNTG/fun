import {World} from './world.js';
import {Player} from './player.js';

var world;
var player;

window.addEventListener('DOMContentLoaded', () => {

	// initialize world objects
	world = new World();
	world.addObstacles(2);
	world.addGround();

	// initialize player
	player = new Player(world._ground_coord_x, world._ground_coord_y);

	//player.playerAction({ 'keycode': 3 } );
	//keydown and keyup
	//TODO: change function to just change the possible next position
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
	// draw obstacles
	world._obstacles.forEach((obstacle) => {
		world._context.fillRect(obstacle._x,obstacle._y,obstacle._width,obstacle._height);
	});
}
	
function drawPlayer () {
	//draw player on ground
	world._context.fillStyle = 'rgba(100, 0, 200, 0.5)';
	// if player is up in the air, then gravity takes effect
	world.movePlayer( player );
	world._context.fillRect(player._position_x, player._position_y, player._width, player._height);
}

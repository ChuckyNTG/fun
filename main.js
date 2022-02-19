import {World} from './world.js';
import {Player} from './player.js';

var world;
var player;

window.addEventListener('DOMContentLoaded', () => {

	// initialize world objects
	world = new World();

	//draw player on the ground
	player = new Player();

	world.drawPlayer(player);

	// initialize player
	// player = new player.Player(world.getWidth()/2,world.getHeight()-300);
	// world.drawPlayer(player);
 }
);

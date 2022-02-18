import {world} from './world.js';
import {player} from './player.js';

window.addEventListener('DOMContentLoaded', () => {

	// initialize world objects
	world = new world.World();
	// initialize player
	player = new player.Player(world.getWidth()/2,world.getHeight()-300);
	world.drawPlayer(player);
 }
);

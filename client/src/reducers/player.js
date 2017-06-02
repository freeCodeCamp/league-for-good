import { FETCH_PLAYER, FETCH_ALL_PLAYERS }  from '../actions/types';



// Player State - returns a player info
		
export default function(state = null, action) {

	switch(action.type) {
	
	case FETCH_PLAYER:
		return action.playerData;
	case FETCH_ALL_PLAYERS:
		return action.playersData;
	}
	
	return state;
}




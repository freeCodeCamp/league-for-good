import { FETCH_PLAYER }  from '../actions/types';



// Player State - returns a player info
		
export default function(state = null, action) {

	switch(action.type) {
	
	case FETCH_PLAYER:
		return action.playerData;
	}
	
	return state;
}




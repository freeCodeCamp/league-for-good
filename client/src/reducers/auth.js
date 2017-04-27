const defaultState = {loggedIn:false, loading:true}

export default function(state = defaultState, action) {
	switch(action.type){
		case 'InitAuthState':
			return action.payload;
		case 'Logged In':
			return {
				loggedIn:true,
				user: action.payload
			};
		case 'Log Out':
			return {
				loggedIn:false
			};
	}
	return state;
}
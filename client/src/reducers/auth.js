
export default function(state = {loggedIn:false}, action) {
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
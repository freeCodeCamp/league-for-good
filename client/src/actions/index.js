import axios from 'axios';

export function initAuthState(){
	//when the page loads, send a post request to the api server to determine whether
	//there is a current user session or a user in the db that matches a stored token
	const storedToken = localStorage.getItem("token");

	return function(dispatch){
		axios.post('/authenticate', {token:storedToken})
		  .then(({data}) => {
			if(data.name){
				const { name, avatar, token } = data
				localStorage.setItem( "token", token)
				//if there was no token in localStorage, but the server returned a user object
				//(meaning a user had successfully logged and was redirected but the token was not saved client side)
				//set the returned token

				dispatch({type:'InitAuthState',payload:{loggedIn:true,user:{ name, avatar }}})
	    }
		})
	}
}

export function logOut(){
	return function(dispatch){
		axios.post("/logout")
			.then((data) => {
				localStorage.removeItem("token")
				dispatch({type:"Log Out"})
			})	
	}
}

export function toggleMenu(){
	return {type:"Toggle Menu"}
}


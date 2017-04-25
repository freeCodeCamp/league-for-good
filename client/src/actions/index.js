import axios from 'axios';

export function initAuthState(){
	return function(dispatch){
		
		const storedToken = localStorage.getItem("token");

		return axios.post('/authenticate', {token:storedToken})
		  .then(({data}) => {
			if(data.name){
				const { name, avatar, token } = data
				localStorage.setItem( "token", token)
				return dispatch({type:'InitAuthState',
					payload:{loggedIn:true,user:{ name, avatar }}})
	    	}else{
	    		localStorage.removeItem("token")
	    		return dispatch({type:'InitAuthState', payload:{loggedIn:false}})
	    	}
		})
	}
}

export function logOut(){
	return function(dispatch){
		axios.post("/logout")
			.then((data) => {
				console.log(data)
				localStorage.removeItem("token")
				dispatch({type:"Log Out"})
			})	
	}
	
}


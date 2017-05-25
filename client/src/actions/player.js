import axios from 'axios';


export function createPlayer(formbody, dispatch, props){
	const body = { player: formbody, league: props.league._id };
	
	axios.post('http://localhost:4000/player/add', body)
		.then(({data}) => {
			console.log(data);
			dispatch({type:'sdfdfsdfds'});
		});
}
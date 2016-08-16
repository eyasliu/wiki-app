export function create(data){
	console.log(data);
	F(config.baseUrl + '/book', {
		method: 'POST',
		body: JSON.stringify(data)
	}).then(res => res.json())
	.then(data => {
		console.log(data);
	})
}

export function getList(params){
  return dispatch => {
  	F(config.baseUrl + '/book')
  	.then(res => res.json())
		.then(data => {
			dispatch({
				type: 'GETLIST',
				data
			})
		})
	}
}

export function remove(id){
	return dispatch => {
		F(config.baseUrl + '/book/' + id, {
			method: 'DELETE'
		})
		.then(res => res.json())
		.then(data => {
			type: 'DELETE',
			id
		})
	}
}
const C = Constant('admin-posts');

export function updateOrCreate(data){
	const isNew = !data.id;
	const url = config.baseUrl + '/post' + (isNew ? '' : '/' + data.id);
	return dispatch => {
		F(url, {
			method: isNew ? 'POST' : 'PUT',
			body: JSON.stringify(data),
		}).then(res => res.json())
		.then(json => {
			dispatch({
				type: isNew ? C.Create : C.Update
			})
		})
	}
}

export function getList(params){
  return dispatch => {
  	F(config.baseUrl + '/post')
  	.then(res => res.json())
		.then(list => {
			dispatch({
				type: C.GetList,
				list
			})
		})
	}
}

export function remove(id){
	return dispatch => {
		F(config.baseUrl + '/post/' + id, {
			method: 'DELETE'
		})
		.then(res => res.json())
		.then(data => {
			
		})
	}
}

export function getView(id){
	return dispatch => {
		F(config.baseUrl + '/post/' + id)
		.then(res => res.json())
		.then(data => {
			dispatch({type: C.GetView, data})
		})
	}
}

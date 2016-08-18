const C = Constant('admin-books');

export function updateOrCreate(data){
	const isNew = !data.id;
	const url = config.baseUrl + '/book' + (isNew ? '' : '/' + data.id);
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
  	F(config.baseUrl + '/book')
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
		F(config.baseUrl + '/book/' + id, {
			method: 'DELETE'
		})
		.then(res => res.json())
		.then(data => {
			
		})
	}
}

export function getView(id){
	return dispatch => {
		F(config.baseUrl + '/book/' + id)
		.then(res => res.json())
		.then(data => {
			dispatch({type: C.GetView, data})
		})
	}
}
export function resetView(){
	return {
		type: C.ResetView
	}
}
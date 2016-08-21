const C = Constant('admin-tags');

export function getList(){
	return dispatch => {
		F(config.baseUrl + '/tag')
		.then(res => res.json())
		.then(data => {
			dispatch({
				type: C.GetList,
				list: data
			})
		})
	}
}

export function updateOrCreate(data){
	const isNew = !data.id
	const url = config.baseUrl + (isNew ? '/tag' : '/tag/' + data.id)
	return dispatch => {
		F(url, {
			method: isNew ? 'POST' : 'PUT',
			body: JSON.stringify(data)
		})
		.then(res => res.json())
		.then(item => {
			dispatch({
				type: isNew ? C.Create : C.Update,
				data: item 
			})
		})
	}
}

export function destory(id){
	return dispatch => {
		F(config.baseUrl + '/tag/' + id, {
			method: 'DELETE'
		})
		.then(res => res.json())
		.then(res => {
			dispatch({
				type: C.Destory
			})
		})
	}
}
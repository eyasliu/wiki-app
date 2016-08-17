const C = Constant('admin-books');
const init = {
	list: [],
	tags: [],
	view: {}
}

export default Reducer({
[C.of('Create')]: (state, {data}) => ({
	...state,
	list: [
		...state.list,
		data
	]
}),
[C.of('Update')]: (state, {data}) => {
	const list = _.map(state.list, item => item.id == data.id ? data : item)
	return {
		...state,
		list: [
			...list
		]
	}
},
[C.of('GetList')]: (state, {list}) => ({
	...state,
	list: [
		...list
	]
}),
[C.of('GetView')]: (state, {data}) => ({
	...state,
	view: data
}),
[C.of('ResetView')]: state => ({
	...state,
	view: {}
})

})(init)

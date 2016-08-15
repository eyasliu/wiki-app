export function create(data){
	console.log(data);
	F(config.baseUrl + '/books', {
		method: 'POST',
		body: JSON.stringify(data)
	}).then(res => res.json())
	.then(data => {
		console.log(data);
	})
}
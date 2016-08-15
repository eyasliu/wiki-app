export function create(data){
	fetch(config.baseUrl + '/books', {
		method: 'POST',
		body: JSON.stringify(data)
	}).then(res => res.json())
	.then(data => {
		console.log(data);
	})
}
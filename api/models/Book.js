module.exports = {
	attributes: {
		id: {
			type: "integer",
	    unique: true,
	    primaryKey: true,
	    autoIncrement: true
		},
		name: {
			type: 'string',
			required: true
		},
		author: {
			model: 'user',
			required: true
		},
		posts: {
			collection: 'post',
			via: 'book'
		},
		order: {
			type: 'json',
			defaultsTo: {}
		}
	}
}
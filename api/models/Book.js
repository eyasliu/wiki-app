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
		descript: {
			type: 'string'
		},
		author: {
			model: 'user',
			required: true
		},
		tags: {
			collection: 'tag',
			via: 'books'
		},
		status: {
			/*
      1 active
      2 disable
      3 deleted
       */
      type: "integer",
      defaultsTo: 1
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
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
		status: {
			/*
      1 active
      2 disable
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
module.exports = {
	find: function(req, res){
		Book.find({status: {'<': 3}})
			.populate(['posts', 'author', 'tags'])
			.then(data => {
				res.json(data);
			})
	},
	findOne: function(req, res){
		Book.findOne(parseInt(req.param('id')))
			.populate(['posts', 'author', 'tags'])
			.then(data => {
				res.json(data)
			})
	},
	create: function(req, res){
		var data = req.body
		data.author = 1;
		data.status = data.status ? 1 : 2;
		Book.create(data).then(result => {
			res.json(result)
		}).catch(err => console.log(err))
	},
	update: function(req, res){
		var body = req.body
		body.status = body.status ? 1 : 2;
		Book.update({
			id: req.param('id')
		}, body)
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			sails.log(body, err);
			res.badRequest({
				msg: 'update error'
			})
		})
	},
	destroy: function(req, res){
		// status == 3 为删除
		Book.update({
			id: req.param('id')
		}, {
			status: 3
		})
		.then(result => {
			res.json(result)
		})
		.catch(err => {
			sails.log(err);
			res.badRequest({
				msg: 'delete error'
			})
		})
	}
}
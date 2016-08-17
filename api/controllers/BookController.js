module.exports = {
	find: function(req, res){
		Book.find({status: 1})
			.populate(['posts', 'author'])
			.then(data => {
				res.json(data);
			})
	},
	findOne: function(req, res){
		sails.log(req.param('id'))
		Book.findOne(parseInt(req.param('id')))
			.populate(['posts', 'author'])
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
		var id = req.param('id');
	},
	destroy: function(req, res){
		Book.destroy(req.param('id'))
		.then(data => {
			res.json(data);
		})
	}
}
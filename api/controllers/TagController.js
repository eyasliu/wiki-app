module.exports = {
	find: function(req, res){
		Tag.find()
			.then(data => {
				res.json(data);
			})
	},
	findOne: function(req, res){
		Tag.findOne(parseInt(req.param('id')))
			.populate(['posts', 'author'])
			.then(data => {
				res.json(data)
			})
	},
	create: function(req, res){
		var data = req.body
		Tag.findOrCreate({
			name: data.name
		}).then(result => {
			res.json(result)
		}).catch(err => console.log(err))
	},
	update: function(req, res){
		var body = req.body
		Tag.update({
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
		Tag.destroy(req.param('id'))
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
module.exports = {
	find: function(req, res){
		Post.find({status: 1})
			.then(data => {
				res.json(data);
			})
	},
	findOne: function(req, res){
		Post.findOne(req.param('id'))
			.populate(['tags', 'author'])
			.then(data => {
				res.json(data)
			})
	}
}
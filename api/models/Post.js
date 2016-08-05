module.exports = {
	attributes: {
    id: {
      type: "integer",
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
		title: {
      type: "string",
      defaultsTo: "[None Title]"
    },
		tags: {
      // type: "array",
      // defaultsTo: []
      collection: "tag",
      via: "posts"
    },
		content: {
      type: "longtext",
      defaultsTo: ""
    },
    author: {
      type: "integer",
      required: true
    },
    status: {
      /*
      1 active
      2 disable
       */
      type: "integer",
      defaultsTo: 1
    }
	},
  findByIds: function(ids, cb){
    Post.find(ids).exec(function(err, posts){
      if(err) console.error(err);
      if(!posts) console.error("post not found");
      cb(posts)
    })
  }
}
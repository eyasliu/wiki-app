module.exports = {
  attributes: {
    id: {
      type: "integer",
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: "string",
      required: true,
      unique: true
    },
    password: {
      type: "string",
      required: true
    },
    email: {
      type: "string",
      required: true,
      unique: true
    },
    posts: {
      collection: "post",
      via: "author"
    },
    toJSON: function(){
      var obj = this.toObject();
      delete obj.password;
      delete obj.createdAt;
      delete obj.updatedAt
      return obj;
    }
  },
  beforeCreate: function(values, cb){
    values.password = Encrypt.hash(values.password);
    cb();
  }
}
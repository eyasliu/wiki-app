module.exports = {
  attributes: {
    id: {
      type: "integer",
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: "string",
      required: true
    },
    posts: {
      collection: "post",
      via: "tags"
    }
  }
}
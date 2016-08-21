module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
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
    },
    books: {
      collection: "book",
      via: "tags"
    }
  }
}
const uniqid = require("uniqid");
const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uniqid(),
  },
  title: {
    type: String,
    required: ["Title "],
  },
  content: {
    type: String,
    required: ["Content"],
  },
  links: {
    type: Array,
    default: [],
  },
  image: {
    type: String,
  },
});

const blogData = mongoose.model("Blog", blogSchema);
module.exports = blogData;

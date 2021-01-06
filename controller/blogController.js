const path = require("path");
// const fs = require("fs");
// const filename = path.join(__dirname, "..", "data", "data.json");
const blogData = require("../modules/blogSchema");

const getAllBlogs = async (req, res, next) => {
  try {
    const allBlogs = await blogData.find();
    res.json(allBlogs);
  } catch (err) {
    res.send("error" + err);
  }
};

const getBlogById = async (req, res, next) => {
  try {
    const findBlogsById = await blogData.find({ id: req.params.id });
    res.json(findBlogsById);
  } catch (err) {
    res.send("error" + err);
  }
};

const createBlog = async (req, res) => {
  try {
    const data = new blogData({
      id: uniqid(),
      title: req.body.title,
      content: req.body.content,
    });
    let newBlog = await data.save();
    res.json({ newBlog });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

const deleteById = async (req, res, next) => {
  try {
    const deleteId = await blogData.findById(res.params.id);
    const c = await blogData.remove();
    res.json(c);
  } catch (err) {
    res.send("error" + err);
  }
};

module.exports.getAllBlogs = getAllBlogs;
module.exports.getBlogById = getBlogById;
module.exports.createBlog = createBlog;
module.exports.deleteBlog = deleteById;

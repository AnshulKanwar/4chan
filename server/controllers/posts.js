import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort([['date', -1]]);

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {};

export const createPost = async (req, res) => {
  const { text } = req.body;

  const newPost = new Post({ text });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

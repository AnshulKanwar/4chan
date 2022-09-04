import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  text: String,
  date: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);

export default Post;

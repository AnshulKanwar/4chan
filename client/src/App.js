import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import PostsList from "./components/PostsList";
import styles from "./App.module.css";
import CreatePost from "./components/CreatePost";

function App() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  const fetchPosts = () => {
    axios
      .get("/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Creating ${text}`);
    axios
      .post("/posts", {
        text,
      })
      .then((res) => {
        fetchPosts();
        setText("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <CreatePost
          text={text}
          handleChange={(e) => setText(e.target.value)}
          handleSubmit={handleSubmit}
        />
        <PostsList posts={posts} />
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow, parseISO } from "date-fns";
import styles from "./PostsList.module.css";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.postsList}>
      {posts.map((post) => (
        <div className={styles.post}>
          <div className={styles.meta}>
            <p>Anonymous</p>
            <p>{formatDistanceToNow(parseISO(post.date))} ago</p>
          </div>
          <p className={styles.text}>{post.text}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;

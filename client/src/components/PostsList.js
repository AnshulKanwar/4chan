import { formatDistanceToNow, parseISO } from "date-fns";
import styles from "./PostsList.module.css";

const PostsList = ({ posts }) => {
  return (
    <div className={styles.postsList}>
      {posts.map((post) => (
        <div  key={post._id} className={styles.post}>
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

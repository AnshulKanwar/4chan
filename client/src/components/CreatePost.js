import { useState } from "react";
import { TbPencil, TbArrowDown } from "react-icons/tb";
import styles from "./CreatePost.module.css";

const CreatePost = ({ text, handleChange, handleSubmit}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.modal}>
      {!isOpen ? (
        <button className={styles.plus} onClick={() => setIsOpen(true)}>
          <TbPencil />
        </button>
      ) : (
        <div className={styles.createPost}>
          <button className={styles.close} onClick={() => setIsOpen(false)}>
            <TbArrowDown />
          </button>
          <form className={styles.form} onSubmit={handleSubmit}>
            <textarea
              className={styles.input}
              rows={8}
              value={text}
              onChange={handleChange}
              placeholder="What's going on your mind?"
            />
            <button className={styles.postBtn} type="submit">
              Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreatePost;

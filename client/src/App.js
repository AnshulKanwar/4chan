import Navbar from "./components/Navbar";
import PostsList from "./components/PostsList";
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <PostsList />
      </div>
    </div>
  );
}

export default App;

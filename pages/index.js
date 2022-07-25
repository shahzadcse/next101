import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home page</h1>
      <a href="/blog">Blog</a>
      <Link href="/blog">
        <a>Blog from Link</a>
      </Link>
    </div>
  );
}

import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home page</h1>

      <Link href="/blog">Blog from Link</Link>
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Task Flow</h1>
        <Link
          href={'/dashboard'}
        >
          <button className={styles.enter}>Enter</button>
        </Link>
        {/* <div className={styles.enter-btn}>Enter</div> */}
        {/* <div className={styles.enter}>yo</div> */}
      </div>
    </main>
  );
}

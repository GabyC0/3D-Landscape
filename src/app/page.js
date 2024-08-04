import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    //this is a server component until you tell it that it is a client component
    <main className={styles.main}>
      <h1>My next.js project</h1>
    </main>
  );
}

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    //this is a server component until you tell it that it is a client component
    <main className={`${styles.main} relative`}>
      <h1>My 3D Playground</h1>
      <Image className="forest" src="/images/nature.png" alt="3d-forest" width={700} height={700}></Image>
    </main>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Spline from '@splinetool/react-spline/next';


export default function Home() {
  return (
    //this is a server component until you tell it that it is a client component
    <main className={`${styles.main}`}>
      <h1>My 3D Playground</h1>
      <Spline
        scene="https://prod.spline.design/ArhoC9hWU1kB66bq/scene.splinecode" 
        width={3072}
        height={550}
      />
      <Image className="forest" src="/images/nature.png" alt="3d-forest" width={700} height={700}></Image>
    </main>
  );
}
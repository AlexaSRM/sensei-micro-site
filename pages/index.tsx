import Head from "next/head";
import Landing from "../components/Landing/Landing";
import Navbar from "../components/Navbar/Navbar";
import Sponsor from "../components/Sponsor/Sponsor";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sensei | Alexa Dev SRM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main
        className={["h-screen", "w-full", "md:w-10/12", "mx-auto"].join(" ")}
      >
        <Landing />
        <Sponsor />
      </main>
    </div>
  );
}

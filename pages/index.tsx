import Head from "next/head";
import Landing from "../components/Landing/Landing";
import Navbar from "../components/Navbar/Navbar";
import Sponsor from "../components/Sponsor/Sponsor";
import Timeline from "../components/Timeline/Timeline";
import styles from "../styles/Home.module.css";
import dynamic from 'next/dynamic';

const Register = dynamic(() => import('../components/Register/Register'), {ssr: false})

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sensei | Alexa Dev SRM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="h-screen w-full">
        <Landing />
        <Timeline />
        <Register />
        <Sponsor />
      </main>
    </div>
  );
}

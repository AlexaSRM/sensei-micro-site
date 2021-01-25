import Head from "next/head";
import Landing from "../components/Landing/Landing";
import Navbar from "../components/Navbar/Navbar";
import Sponsor from "../components/Sponsor/Sponsor";
import Timeline from "../components/Timeline/Timeline";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const Register = dynamic(() => import("../components/Register/Register"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sensei | Alexa Dev SRM</title>
        <link rel="icon" href="/sensei_hat.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AlexaDevSRM" />
        <meta name="twitter:creator" content="@AlexaDevSRM" />
        <meta property="og:url" content="https://sensei.alexadevsrm.com" />
        <meta property="og:title" content="Sensei" />
        <meta
          property="og:description"
          content="Sensei, a flagship training program by Alexa Dev SRM"
        />
        <meta
          property="og:image"
          content="https://billboard.srmkzilla.net/api/blog?title=Sensei&subtitle=AlexaDevSRM&theme=dark"
        />
        <meta name="keywords" content="sensei,alexa,alexadevsrm,srm" />
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

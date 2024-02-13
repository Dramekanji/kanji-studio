import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kanji Studio</title>
        <meta name="description" content="Kanji Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <About />
      <Team />
    </div>
  );
}

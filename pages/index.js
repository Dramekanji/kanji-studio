import Head from "next/head";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kanji Studio</title>
        <meta name="description" content="Kanji Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      {/* You can add more content here if needed */}
    </div>
  );
}

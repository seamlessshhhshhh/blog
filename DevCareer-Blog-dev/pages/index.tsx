import Head from "next/head";
import NavBar from "../components/NavBar";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Seun | DevCareer | Blog</title>
        <meta name="description" content="blog devcareer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen overflow-auto flex flex-col scrollbar-hide">
        <NavBar />
        <div className="flex-grow flex flex-col scrollbar-hide">
          <Content />
          <Footer />
        </div>
      </div>
    </>
  );
}

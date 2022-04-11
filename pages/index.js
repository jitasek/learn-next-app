import Head from "next/head"; // this is used for custom titles, meta tags, keywords, descriptions

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Dev Newz</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  );
}

import Head from "next/head"; // this is used for custom titles, meta tags, keywords, descriptions

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>Web Dev Newz</title>
        <meta name="keywords" content="web development, programming" />
      </Head>

      {articles.map((article) => (
        <h3>{article.title}</h3>
      ))}
    </div>
  );
}
// getStaticProps method allows us to fetch at build time from this 3rd party fake API called JSON Placeholder which just gets a bunch of posts for us
// I am limiting the scope to 6
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json(); // gives us the data, await for it too

  // returns an object with props; inside the props is the data I wanna pass as props, i.e. articles I wanna fetch - need to pass them in the Home component too!
  return {
    props: {
      articles,
    },
  };
};

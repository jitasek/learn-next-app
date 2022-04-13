import Link from "next/link";
import { useRouter } from "next/router";

const article = ({ article }) => {
  //   const router = useRouter(); // gonna contain any parameter that are in the route --> destructure it and use only the ones I need:
  //   const { id } = router.query;

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

// getServerSideProps and getStaticProps can get passed in a context - that allows me to get the id of whatever is in the URL
// if we use getStaticProps, we need also the getStaticPaths (for getServerSideProps we don't )
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } })); // for each id we wanna return an object with params, inside params we have another object with id which equals the id but we need to format it as a string

  return {
    // paths: { params: { id: "1", id: "2" } }, // to be able to do this programatically, I need first to get an array of id of all the articles(posts) - see the above two map methods
    paths,
    fallback: false, // this will return 404 if user goes to some url that doesn't exist
  };
};

export default article;

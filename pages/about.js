// import Head from "next/head";
import Meta from "../components/Meta"; // I import it to be able to change the meta title for this specific page (see below)

const about = () => {
  return (
    <div>
      <Meta title="About" />
      {/* <Head>
        <title>About</title>
      </Head> */}
      <h1>About</h1>
    </div>
  );
};

export default about;

// this file is a default meta component - it sets meta data for every page so that I don't need to import Head on each of them individually
//  --> need to include it in the Layout.js too !
import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

// I can also add default props:
Meta.defaultProps = {
  title: "Next.js App",
  keywords: "web development, programming",
  description: "Basic application built in Next.js",
};

export default Meta;

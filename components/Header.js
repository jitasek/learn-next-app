import headerStyles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      {/* <h1 className="title"> */}
      <h1 className={headerStyles.title}>
        My First <span>Next.js</span> App
      </h1>
      {/* below + line 6 = example of inline styling (can look messy, rather use only e.g. for conditional rendering): */}
      {/* <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style> */}
      <p className={headerStyles.description}>
        Hi I am Jitka. Feel free to check my{" "}
        <span className={headerStyles.gitrepo}>
          <Link href="https://github.com/jitasek/learn-next-app">
            GitHub repository
          </Link>{" "}
        </span>{" "}
        for the code and some useful comments I incorporated in there.
      </p>
    </div>
  );
};

export default Header;

import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      {/* <h1 className="title"> */}
      <h1 className={headerStyles.title}>
        <span>Web Dev</span>News
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
        Keep up to date with the latest web dev news.
      </p>
    </div>
  );
};

export default Header;

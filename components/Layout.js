import Nav from "./Nav";
import styles from "../styles/Layout.module.css"; // = former Home.module.css

// everything that lies in this component shows up on every page of the app
// this component wraps every page (its child) of my app

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Hello</h1>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;

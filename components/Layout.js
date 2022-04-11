import Nav from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css"; // = former Home.module.css

// everything that lies in this component shows up on every page of the app
// this component wraps every page (its child) of my app

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;

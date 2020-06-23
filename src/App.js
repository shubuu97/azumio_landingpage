import React from "react";
//?components
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
//?styles
import styles from "./App.module.css";

function App() {
   return (
      <div className={styles.App}>
         <Header />
         <Body />
         <Footer />
      </div>
   );
}

export default App;

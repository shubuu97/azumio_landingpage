import React, { useEffect } from "react";
//?components
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
//?styles
import styles from "./App.module.css";
import { render } from "@testing-library/react";

class App extends React.Component {
   onUnload = (e) => {
      e.preventDefault();
      e.returnValue = "Are you sure you want to reload?";
   };

   componentDidMount() {
      window.addEventListener("beforeunload", this.onUnload);
   }

   componentWillUnmount() {
      window.removeEventListener("beforeunload", this.onUnload);
   }

   render() {
      return (
         <div className={styles.App}>
            <Header />
            <Body />
            <Footer />
         </div>
      );
   }
}

export default App;

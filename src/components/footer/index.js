import React from "react";
//?components
import Dots from "./dots";
//?styles
import styles from "./style.module.css";

const Footer = () => {
   return (
      <div className={styles.footer}>
         <div>
            <span>Back</span>
         </div>
         <Dots count={5} />
         <div className={styles.active}>
            <span>Done</span>
         </div>
      </div>
   );
};

export default Footer;

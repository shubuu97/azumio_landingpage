import React from "react";
//?styles
import styles from "./style.module.css";

const Header = () => {
   return (
      <div>
         <h2 className={styles.heading}>What are your main areas of focus?</h2>
         <p className={styles.sub_heading}>
            This will help us build a personalized experience for you
         </p>
      </div>
   );
};

export default Header;

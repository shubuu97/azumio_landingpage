import React from "react";
import PropTypes from "prop-types";
//?styles
import styles from "./style.module.css";

const Dots = ({ count = 5 }) => {
   let DotsArray = new Array(count).fill(1);
   return (
      <div className={styles.dots_container}>
         {DotsArray.map((dot, index) => {
            return <div key={index} className={styles.dot} />;
         })}
      </div>
   );
};

export default Dots;

Dots.propTypes = {
   name: PropTypes.number,
};

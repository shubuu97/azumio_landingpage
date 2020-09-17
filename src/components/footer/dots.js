import React from "react";
import PropTypes from "prop-types";
//?styles
import "./style.css";

const Dots = ({ count = 5 }) => {
   let DotsArray = new Array(count).fill(1);
   return (
      <div className="dots_container">
         {DotsArray.map((dot, index) => {
            return <div key={index} className={index === count - 1 ? "dot active_dot" : "dot"} />;
         })}
      </div>
   );
};

export default Dots;

Dots.propTypes = {
   name: PropTypes.number,
};

import React from "react";
//?components
import Dots from "./dots";
//?styles
import "./style.css";

const Footer = () => {
   return (
      <div className="footer">
         <div>
            <span>Back</span>
         </div>
         <Dots count={5} />
         <div className="active">
            <span>Done</span>
         </div>
      </div>
   );
};

export default Footer;

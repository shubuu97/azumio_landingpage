import React from "react";
//?components
import Item from "./item";
//?styles
import styles from "./style.module.css";

const Items = [
   "Blood Glucose",
   "Medication",
   "Food Tracking",
   "Exercise",
   "Weight Management",
   "Blood Pressure",
   "A1C",
];

const Body = () => {
   return (
      <div className={styles.items}>
         {(Items || []).map((item, index) => (
            <Item key={index} item={item} />
         ))}
      </div>
   );
};

export default Body;

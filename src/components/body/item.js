import React from "react";
//?styles
import styles from "./style.module.css";

const Item = ({ item }) => {
   return <div className={styles.item}>{item}</div>;
};

export default Item;

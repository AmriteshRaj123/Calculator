import React from "react";
import styles from './parentContainer.module.css';

export default function parentContainer({children}){
    return (
        <div className={styles.parent}>
            {children}
        </div>
    )
}
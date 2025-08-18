import React from 'react';
import styles from './index.module.css';
export default function PostItem({title}){
  return (
    <div className={styles.postItem}> {title} </div>
  );
}
import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
export default function PostItem({title,imgUrl}){
  return (
    <div className={styles.postItem}> 
    <div className={styles.imageWrapper}>
      <Image  src={imgUrl} fill />
    </div>
    <div className={styles.content}>
      <h3 className={styles.postTitle}>{title} </h3>
    </div>
    </div>
  );
}
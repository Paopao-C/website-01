import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';

export default function PostItem({ title, imgUrl, content, tags }) {
  return (
    <div className={styles.postItem}> 
      <div className={styles.imageWrapper}>
        <Image src={imgUrl} alt={title} fill />
        <div className={styles.imageOverlay}>
          <div className={styles.buttonContainer}>
            <button className={styles.detailButton}>了解详情</button>
            <button className={styles.consultButton}>立即咨询</button>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.postTitle}>{title}</h3>
        <p className={styles.postContent}>{content}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
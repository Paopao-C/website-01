import React from 'react';
import Image from 'next/image';
import styles from './index.module.css';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image src='/banner.png' alt='banner' objectFit='cover' width={1872} height={2000} />
    </div>
  );
}
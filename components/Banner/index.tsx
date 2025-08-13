import React from 'react';
import Image from 'next/image';
import styles from './index.module.css';

export default function Banner() {
  return (
    <div>
      {/* Banner 部分 */}
      <div className={styles.banner}>
        <Image src='/banner.png' alt='banner' objectFit='cover' width={1872} height={700} />
        <div className={styles.bannerContent}>
          <h1>室内外一体化导航解决方案</h1>
          <p>
            服务1000+企业单位，构建14个行业2000万平米的私域地图。致力于深度强化位置安全屏障，搭建空间与业务的数字桥梁为企业发展输送数字新活力。
          </p>
          <button className={styles.bannerButton}>查看方案</button>
        </div>
      </div>

      {/* 三个方框部分 */}
      <div className={styles.featureBoxes}>
        <div className={styles.featureBox}>
          <h3>湖南工商大学湘江楼项目</h3>
          <p>湖南工商大学（Hunan University Of Technology and Business），简称湖工商（HUTB），位于湖南省长沙市...</p>
        </div>
        <div className={styles.featureBox}>
          <h3>湖南工商大学湘江楼项目</h3>
          <p>湖南工商大学（Hunan University Of Technology and Business），简称湖工商（HUTB），位于湖南省长沙市...</p>
        </div>
        <div className={styles.featureBox}>
          <h3>湖南工商大学湘江楼项目</h3>
          <p>湖南工商大学（Hunan University Of Technology and Business），简称湖工商（HUTB），位于湖南省长沙市...</p>
        </div>
      </div>
    </div>
  );
}
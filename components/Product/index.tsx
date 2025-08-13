"use client";
import React, { useState } from 'react';
import styles from './index.module.css';
import Image from 'next/image';

const ProductIntroduction = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const products = [
    {
      title: "室内导航系统",
      icon: "/tu1.png",
      description: "基于全通导航自主研发的实景采集与3D模型渲染技术，并结合先进的室内导航、蓝牙定位算法，以智能终端硬件为载体，辅助用户在室内快速精准到达目的地。",
      features: ["3D地图", "蓝牙定位", "AR导航", "VR导航", "电子图栏", "路径规划"],
      largeImage: "/chengxu1.png" 
    },
    {
      title: "室内定位系统",
      icon: "/tu2.png",
      description: "基于全通导航自主研发的引擎，结合蓝牙ibeacon，提供实时轨迹显示、电子图栏、历史轨迹、安防视频联动等空间位置服务，实现人员物资空间可视化，降低区域安全风险。",
      features: ["实时轨迹显示", "电子图栏报警", "人流热力图", "历史轨迹查询", "安防摄像头联动", "报警管理"],
      largeImage: "/chengxu1.png"
    },
    {
      title: "GPS导航系统",
      icon: "/tu3.png",
      description: "采用GPS定位和蓝牙定位系统，结合调用高德地图数据的自研室外地图，为人员车辆提供室外实时定位导航，填补大型区域没有室外GPS导航的空白。",
      features: ["高德地图底图", "三维楼宇地图", "GPS蓝牙定位", "室外AR导航"],
      largeImage: "/chengxu3.jpg"
    },
    {
      title: "AR互动营销",
      icon: "/tu4.png",
      description: "运用全通导航自研AR图形引擎，打造AR视觉虚拟互动产品，提供真实场景+虚拟交互服务，实现实景交融数字的新型营销方式。",
      features: ["AR导航", "AR游戏", "AR活动", "AR广告", "AR品牌"],
      largeImage: "/chengxu3.jpg"
    }
  ];

  return (
    <section className={styles.productIntroduction}>
      <h1 className={styles.sectionTitle}>数字地图智能产品</h1>
      
      {/* 标签栏 */}
      <div className={styles.tabHeader}>
        {products.map((product, index) => (
          <div 
            key={index}
            className={`${styles.tabItem} ${activeTab === index ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <div className={styles.tabIcon}>
              <Image 
                src={product.icon} 
                alt={product.title} 
                width={100} 
                height={100}
                className={styles.iconImage}
              />
            </div>
            <div className={styles.tabTitle}>{product.title}</div>
          </div>
        ))}
      </div>
      
      {/* 内容区域 */}
      <div className={styles.tabContent}>
        <div className={styles.productImage}>
          <Image 
            src={products[activeTab].largeImage} 
            alt={products[activeTab].title} 
            width={600} 
            height={400}
            className={styles.largeImage}
          />
        </div>
        
        <div className={styles.productInfo}>
          <h3 className={styles.productTitle}>{products[activeTab].title}</h3>
          <p className={styles.productDescription}>{products[activeTab].description}</p>
          
          <div className={styles.featureContainer}>
            {products[activeTab].features.map((feature, idx) => (
              <div key={idx} className={styles.featureItem}>
                {feature}
              </div>
            ))}
          </div>
          
          <div className={styles.buttonGroup}>
            <button className={styles.productButton}>立即咨询</button>
            <button className={styles.productButton}>产品详情</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntroduction;
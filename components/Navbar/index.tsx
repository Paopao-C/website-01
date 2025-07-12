"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './index.module.css';

export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isScrolled, setIsScrolled] = useState(false); // 新增状态用于判断是否已滚动

  // 弹窗内容数据
  const dropdownContents = {
    '产品服务': {
      sections: [
        { title: '基础功能', items: ['室内导航', '室内地图', '室内定位', 'AR导航', 'VR导航', 'VR导览'] },
        { title: '特色产品', items: ['地图编辑器', '地图SDK', '导航HS版', '触摸导航系统', 'AE互动营销', '三维地图制作', '室外GPS导航'] },
        { title: '智能硬件', items: ['蓝牙', '触摸一体机'] },
      ],
      description: {
        title: '全通导航产品服务',
        content: '运用维持自主研发的地图编辑器、打通高精度、轻量化的位置与空间服务产品，深度扩展用户的空间方位感知能力。',
        features: [
          '高精度室内定位技术',
          '轻量化地图渲染引擎',
          '跨平台AR/VR导航体验',
          '一站式空间数据解决方案'
        ]
      }
    },
    '解决方案': {
      sections: [
        { title: '商业解决方案', items: ['商场导览系统', '智慧办公导航', '会展中心导航'] },
        { title: '行业解决方案', items: ['医院导航系统', '交通枢纽导航', '博物馆导览'] },
        { title: '定制解决方案', items: ['企业定制导航', '景区智慧导览', '大型活动导航'] },
      ],
      description: {
        title: '全通导航解决方案',
        content: '为各行业提供专业的室内导航解决方案，帮助企业提供用户体验和运营效率。',
        features: [
          '行业定制化开发',
          '快速部署实施',
          '智能数据分析平台',
          '多终端无缝对接'
        ]
      }
    },
    '关于我们': {
      sections: [
        { title: '了解我们', items: ['企业介绍', '发展历程', '团队风采'] },
        { title: '新闻活动', items: ['企业动态', '行业新闻', '活动预告'] },
        { title: '资源服务', items: ['资料下载', '政策查询', '服务支持'] },
      ],
      description: {
        title: '关于全通导航',
        content: '全通导航专注于室内定位与导航技术研发，致力于为用户提供精确、智能的空间服务解决方案。',
        features: [
          '国家级高新技术企业',
          '50+专业研发团队',
          '1000+成功案例',
          '7*24小时技术支持'
        ]
      }
    },
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuHover = (menuName: string) => {
    // 清除之前的关闭定时器
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (['产品服务', '解决方案', '关于我们'].includes(menuName)) {
      setActiveMenu(menuName);
    } else {
      // 当悬停在无下拉菜单项上时，立即关闭下拉
      setActiveMenu(null);
    }
  };

  const handleMenuLeave = (menuName: string) => {
    // 设置定时器延迟关闭，给鼠标移动到弹窗的时间
    if (['产品服务', '解决方案', '关于我们'].includes(menuName) && activeMenu === menuName) {
      timeoutRef.current = setTimeout(() => {
        setActiveMenu(null);
      }, 150);
    }
  };

  const handleDropdownEnter = () => {
    // 清除定时器，防止鼠标进入弹窗时关闭菜单   
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleDropdownLeave = () => {
    // 鼠标离开弹窗时关闭菜单
    setActiveMenu(null);
  };

  return (
    <div className={`${styles.navbarContainer} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbar}>
        <div className={styles.title}>
          <Image src='/logo.png' alt='logo' width={50} height={50} />
          <div className={styles.title_text}>
            <span style={{ marginLeft: 15, fontSize: 23, color: '#ff7910', fontWeight: 600, textShadow: '2px 2px 4px rgba(233, 178, 60, 0.3)' }}>全通导航</span>
            <span style={{ marginLeft: 15, fontSize: 9.6, color: '#ff7910', fontWeight: 500, textShadow: '2px 2px 4px rgba(209, 95, 19, 0.3)' }}>QUANTONGDAOHANG</span>
          </div>
        </div>
        <ul className={styles.menu_list}>
          {['首页', '产品服务', '解决方案', '精选案例', '开发资料库', '常见问题', '关于我们'].map((item) => (
            <li
              key={item}
              onMouseEnter={() => handleMenuHover(item)}
              onMouseLeave={() => handleMenuLeave(item)}
              className={activeMenu === item ? styles.activeMenuItem : ''}
            >
              <div className={styles.menuItem}>
                {item}
                <div className={styles.underline}></div>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.register}>
          <Image src='/tell.png' alt='logo' width={20} height={20} />
          <span className={styles.tell}>400-067-0887</span>
          <button className={styles.map}>地图演示</button>
        </div>

      </div>

      {/* 下拉弹窗 */}
      {activeMenu && (
        <div
          className={styles.dropdown}
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
        >
          <div className={styles.dropdownContent}>
            <div className={styles.leftPanel}>
              <div className={styles.gridContainer}>
                {dropdownContents[activeMenu as keyof typeof dropdownContents]?.sections.map((section, index) => (
                  <div key={index} className={styles.section}>
                    <h3 className={styles.sectionTitle}>{section.title}</h3>
                    <ul className={styles.sectionList}>
                      {section.items.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.rightPanel}>
              <div className={styles.descriptionBox}>
                <h3 className={styles.descTitle}>
                  {dropdownContents[activeMenu as keyof typeof dropdownContents]?.description?.title}
                </h3>
                <p className={styles.descContent}>
                  {dropdownContents[activeMenu as keyof typeof dropdownContents]?.description?.content}
                </p>

                <div className={styles.features}>
                  {dropdownContents[activeMenu as keyof typeof dropdownContents]?.description?.features?.map((feature, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <div className={styles.featureIcon}>✓</div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={styles.learnMore}>了解更多</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
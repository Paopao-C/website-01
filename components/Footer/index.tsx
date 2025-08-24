import React from 'react';
import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* 左侧内容 */}
        <div className={styles.cols}>
          <div className={styles.col}>
            <h3 className={styles.title}>基础功能</h3>
            <ul className={styles.list}>
              <li><a href="#">室内导航</a></li>
              <li><a href="#">室内地图</a></li>
              <li><a href="#">室内定位</a></li>
              <li><a href="#">AR导航</a></li>
              <li><a href="#">VR导航</a></li>
              <li><a href="#">VR导览</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.title}>特色产品</h3>
            <ul className={styles.list}>
              <li><a href="#">导航H5版</a></li>
              <li><a href="#">触摸导视系统</a></li>
              <li><a href="#">AR互动营销</a></li>
              <li><a href="#">三维地图制作</a></li>
              <li><a href="#">室外GPS导航</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.title}>智能硬件</h3>
            <ul className={styles.list}>
              <li><a href="#">蓝牙</a></li>
              <li><a href="#">触摸一体机</a></li>
            </ul>
          </div>

          {/* 解决方案：分两列 */}
          <div className={styles.col}>
            <h3 className={styles.title}>解决方案</h3>
            <div className={styles.solutionCols}>
              <ul className={styles.list}>
                <li><a href="#">商场</a></li>
                <li><a href="#">政务大厅</a></li>
                <li><a href="#">景区</a></li>
                <li><a href="#">图书馆</a></li>
                <li><a href="#">停车场</a></li>
                <li><a href="#">地铁站</a></li>
                <li><a href="#">医院</a></li>
                <li><a href="#">法院</a></li>
              </ul>
              <ul className={styles.list}>
                <li><a href="#">工厂</a></li>
                <li><a href="#">校园</a></li>
                <li><a href="#">博物馆</a></li>
                <li><a href="#">交通枢纽</a></li>
                <li><a href="#">园区</a></li>
                <li><a href="#">展馆</a></li>
                <li><a href="#">会展</a></li>
                <li><a href="#">机场</a></li>
                <li><a href="#">乡村</a></li>
              </ul>
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.title}>关于全通</h3>
            <ul className={styles.list}>
              <li><a href="#">企业介绍</a></li>
              <li><a href="#">加入我们</a></li>
              <li><a href="#">联系我们</a></li>
            </ul>
          </div>
        </div>

        {/* 友情链接 */}
        <div className={styles.friendLinks}>
          <span>友情链接：</span>
          <a href="#">futek传感器</a>
          <a href="#">阿里企业邮箱注册</a>
          <a href="#">电话系统</a>
          <a href="#">灵活用工平台</a>
          <a href="#">客服系统</a>
          <a href="#">呼叫中心系统</a>
          <a href="#">呼叫中心</a>
          <a href="#">UWB定位</a>
        </div>
      </div>
    </footer>
  );
}
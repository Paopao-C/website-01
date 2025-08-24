import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Product from "@/components/Product";
import PostItem from "@/components/PostItem";
import Footer from "@/components/Footer";

const PostList = ({posts}) => { 
  return (
    <div>
       <h1 className={styles.sectionTitle}>满足各场需求的定制化方案</h1>
    <div className={styles.postList}>
      {posts.map(item=>{
    const {id,title,content,tags,imgUrl} = item;
    return <PostItem key={id} title={title} content={content} tags={tags} imgUrl={imgUrl} />
  })}
    </div>
    </div>
    
  )
};

export default function Home() {

  // 模拟以下数据
  const posts = [
    {
      id: 1,
      title: "工厂",
      content: "工厂3D地图系统，提供实时导航服务，帮助员工和访客更快地找到生产线、仓库等重要位置。",
      tags: ["3D楼层导航", "AR导航营销",'VR全景探店','反向寻车'],
      imgUrl:'/postImg/post-item-img-01.jpg'
    },
    {
      id: 2,
      title: "商场",
      content: "打造商场3DVR地图系统和商业数据管理平台，为消费者提供购物全站式的智能引导服务，推动商场数字化升级转型。",
      tags: ["3D楼层导航", "电子大屏导购", "AR导航营销",'VR全景探店'],
      imgUrl:'/postImg/post-item-img-02.jpg'
    },
    {
      id: 3,
      title: "医院",  
      content: "根据医院的实际情况，提供个性化的3D地图解决方案，帮助患者和访客更快地找到目的地，提升医院的服务质量。",
      tags: ["院内导航", "智慧导航", "AR导航营销",'VR导航','反向寻车'],
      imgUrl:'/postImg/post-item-img-03.jpg'
    },
    {
      id:4 ,
      title: "图书馆",  
      content: "建设数字化图书馆，提供3D地图和导航服务，帮助读者更快地找到所需的书籍和资源。",
      tags: ["3D楼层导航", "电子大屏导购", "AR导航营销",'VR全景探店',],
      imgUrl:'/postImg/post-item-img-04.jpg'
    },{
      id: 5,
      title: "学校",  
      content: "运用3D地图和导航技术，提升学校的管理效率和学生的学习体验,帮助学生和教职工更快地找到教室、实验室等重要位置。",
      tags: ["3D楼层导航", "电子大屏导购", "AR导航营销",'VR全景探店',],
      imgUrl:'/postImg/post-item-img-05.jpg'
    },{
      id: 6,
      title: "机场",  
      content: "搭建机场3D地图系统，提供实时导航服务，帮助旅客更快地找到登机口、行李提取处等重要位置。",
      tags: ["3D楼层导航", "电子大屏导购", "AR导航营销",'VR全景探店',],
      imgUrl:'/postImg/post-item-img-06.jpg'
    },{
      id: 7,
      title: "法院",  
      content: "法院3D地图系统，提供实时导航服务，帮助访客更快地找到法庭、办公室等重要位置。",
      tags: ["3D楼层导航", "电子大屏导购", "AR导航营销",'VR全景探店',],
      imgUrl:'/postImg/post-item-img-07.jpg'
    },{
      id: 8,
      title: "会展",  
      content: "会展中心3D地图系统，提供实时导航服务，帮助参展商和观众更快地找到展位、会议室等重要位置。",
      tags: ["3D楼层导航", "电子大屏导购", "AR导航营销",'VR全景探店',],
      imgUrl:'/postImg/post-item-img-08.jpg'
    },{
      id: 9,
      title: "公园",  
      content: "公园3D地图系统，提供实时导航服务，帮助游客更快地找到景点、餐饮区等重要位置。",
      tags: ["3D楼层导航", "电子大屏导购", "AR导航营销",'VR全景探店',],
      imgUrl:'/postImg/post-item-img-09.jpg'
    },

  ]
  return (
    <>
    <main className={styles.main}>
      <NavBar />
      <Banner />
      <Product />
      <PostList posts={posts} />
    </main>
    <Footer />
    </>
  );
}

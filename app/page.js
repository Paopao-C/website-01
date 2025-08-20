import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Product from "@/components/Product";
import PostItem from "@/components/PostItem";

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
      content: "This is the content of Plan 1.",
      tags: ["工厂", "生产", "制造"],
      imgUrl:'/postImg/post-item-img-01.jpg'
    },
    {
      id: 2,
      title: "商场",
      content: "This is the content of Plan 2.",
      tags: ["工厂", "生产", "制造"],
      imgUrl:'/postImg/post-item-img-02.jpg'
    },
    {
      id: 3,
      title: "医院",  
      content: "This is the content of Plan 3.",
      tags: ["工厂", "生产", "制造"],
      imgUrl:'/postImg/post-item-img-03.jpg'
    },
    {
      id:4 ,
      title: "图书馆",  
      content: "This is the content of Plan 3.",
      tags: ["工厂", "生产", "制造"],
      imgUrl:'/postImg/post-item-img-04.jpg'
    },{
      id: 5,
      title: "学校",  
      content: "This is the content of Plan 3.",
      tags: ["工厂", "生产", "制造"],
      imgUrl:'/postImg/post-item-img-05.jpg'
    },{
      id: 6,
      title: "机场",  
      content: "This is the content of Plan 3.",
      tags: ["工厂", "生产", "制造"],
      imgUrl:'/postImg/post-item-img-06.jpg'
    },{
      id: 7,
      title: "法院",  
      content: "This is the content of Plan 3.",
      tags: ["工厂", "生产", "制造"],
      imgUrl:'/postImg/post-item-img-07.jpg'
    },{
      id: 8,
      title: "会展",  
      content: "This is the content of Plan 3.",
      tags: ["工厂", "生产", "制造"],
      imgUrl:'/postImg/post-item-img-08.jpg'
    },{
      id: 9,
      title: "公园",  
      content: "This is the content of Plan 3.",
      tags: ["工厂", "生产", "制造"],
      imgUrl:'/postImg/post-item-img-09.jpg'
    },

  ]
  return (

    <main className={styles.main}>
      <NavBar />
      <Banner />
      <Product />
      <PostList posts={posts} />
    </main>

  );
}

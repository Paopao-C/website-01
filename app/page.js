import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Product from "@/components/Product";
import PostItem from "@/components/PostItem";

const PostList = ({posts}) => { 
  return (
    <div className={styles.postList}>
      {posts.map(item=>{
    const {id,title,content,tags} = item;
    return <PostItem key={id} title={title} content={content} tags={tags} />
  })}
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
    },
    {
      id: 2,
      title: "Plan 2",
      content: "This is the content of Plan 2.",
      tags: ["工厂", "生产", "制造"],
    },
    {
      id: 3,
      title: "Plan 3",  
      content: "This is the content of Plan 3.",
      tags: ["工厂", "生产", "制造"],
    },
    {
      id:4 ,
      title: "Plan 4",  
      content: "This is the content of Plan 3.",
      tags: ["工厂", "生产", "制造"],
    },{
      id: 5,
      title: "Plan 5",  
      content: "This is the content of Plan 3.",
      tags: ["工厂", "生产", "制造"],
    },{
      id: 6,
      title: "Plan 6",  
      content: "This is the content of Plan 3.",
      tags: ["工厂", "生产", "制造"],
    },{
      id: 7,
      title: "Plan 7",  
      content: "This is the content of Plan 3.",
      tags: ["工厂", "生产", "制造"],
    },{
      id: 8,
      title: "Plan 8",  
      content: "This is the content of Plan 3.",
      tags: ["工厂", "生产", "制造"],
    },{
      id: 9,
      title: "Plan 9",  
      content: "This is the content of Plan 3.",
      tags: ["工厂", "生产", "制造"],
    },{
      id: 10,
      title: "Plan 10",  
      content: "This is the content of Plan 3.",
      tags: ["工厂", "生产", "制造"],
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

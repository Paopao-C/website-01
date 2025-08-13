import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Product from "@/components/Product";

export default function Home() {
  return (

    <main className={styles.main}>
      <NavBar />
      <Banner />
      <Product />
    </main>

  );
}

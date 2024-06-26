import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/League Blog.png" alt='logo' width={50} height={50}/>
          <h1 className={styles.logoText}>League Blog</h1>
        </div>
        <p className={styles.desc}>
        Discover the fascinating world of League of Legends through a unique lens. We explore the deep connections between the game and life, offering insights into personal growth, teamwork, philosophy, and the psychology of gaming. Join us as we delve into the stories and characters that inspire and resonate with gamers around the globe.
        </p>
        <div className={styles.social}>
        <Image src="/facebook.png" alt='facebook' width={18} height={18}/>
        <Image src="/instagram.png" alt='instagram' width={18} height={18}/>
        <Image src="/tiktok.png" alt='tiktok' width={18} height={18}/>
        <Image src="/youtube.png" alt='youtube' width={18} height={18}/>
      </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home Page</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Philosophy</Link>
          <Link href="/">Development</Link>
          <Link href="/">Collaboration Dynamics</Link>
          <Link href="/">Psychological Insights</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">facebook</Link>
          <Link href="/">instagram</Link>
          <Link href="/">tiktok</Link>
          <Link href="/">youtube</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
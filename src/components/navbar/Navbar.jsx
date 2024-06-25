import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt='facebook' width={24} height={24}/>
        <Image src="/instagram.png" alt='instagram' width={24} height={24}/>
        <Image src="/tiktok.png" alt='tiktok' width={24} height={24}/>
        <Image src="/youtube.png" alt='youtube' width={24} height={24}/>
      </div>
      <div className={styles.logo}>LeagueBlog</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/">Home Page</Link>  
        <Link href="/">Contact Us</Link>  
        <Link href="/">About Us</Link>  
        <AuthLinks/>
      </div> 
      
    </div>
  )
}

export default Navbar
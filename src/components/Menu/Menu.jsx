import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'
const Menu = () => {
  return (
    <aside className={styles.container}>
      {/* Whats Hot section */}
       <h2 className={styles.subtitle}>What's hot</h2>
       <h1 className={styles.title}>Most Popular</h1>
        <MenuPosts withImage={false}/>

        {/* Category section */}
        <h2 className={styles.subtitle}>Discover by topic</h2>
        <h1 className={styles.title}>Categories</h1>

        <MenuCategories/>
        
       {/* Editors Pick section */}
       <h2 className={styles.subtitle}>Chosen by Editor</h2>
       <h1 className={styles.title}>Editors Pick</h1>

       <MenuPosts withImage={true}/>
    </aside>
    
  )
}

export default Menu
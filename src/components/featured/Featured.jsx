import React from 'react'
import styles from './Featured.module.css'
import Image from 'next/image'
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b >Welcome to the League of Legendary Blog</b>, Discover interesting interpretations of league of legends lore.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1n.jpeg" alt='' fill priority className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>League of Legends, A surpising interpretation of life itself</h1>
          <p className={styles.postDesc}>In the world of competitive gaming, few titles rival the global phenomenon that is League of Legends. Yet, beyond its pixelated battlegrounds and flashy displays of skill, lies a surprising interpretation of life itself. </p>

          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
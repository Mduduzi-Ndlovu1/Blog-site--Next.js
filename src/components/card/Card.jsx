import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'

const Card = () => {
  return (
    <article className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt='' fill/>
        </div>
        <div className={styles.textContainer}>
            
        </div>
    </article>
  )
}

export default Card
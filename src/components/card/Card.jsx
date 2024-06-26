import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <article className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="/p1n.jpeg" alt='' fill priority className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>23.02.2024 --</span>
                <span className={styles.category}>Philosophy</span>
            </div>

            <Link href="/">
            <h1>
                The Philosophy of Garen: Exploring Virtue and Duty
            </h1>
            </Link>
            <p className={styles.desc}>
                League of Legends, at first glance, may seem like just another competitive online game, but beneath its surface lies a rich tapestry of characters and stories that reflect deeper philosophical themes. One such character is Garen, the Might of Demacia, whose unwavering commitment to justice and duty offers valuable insights into the nature of virtue and moral responsibility. In this post, we'll explore the philosophical dimensions of Garen and what he can teach us about living a virtuous life.
            </p>

            <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </article>
  )
}

export default Card
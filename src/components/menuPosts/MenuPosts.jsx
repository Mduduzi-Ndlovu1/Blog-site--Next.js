import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './menuPosts.module.css'

const MenuPosts = ({withImage}) => {
  return (
    
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
        {withImage && (
            <div className={styles.imageContainer}>
            <Image src="/ryze.jpeg" alt="p1n.jpeg" fill className={styles.image}/>
            </div>
        )}
        <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.philosophy}`}> Philosophy

            </span>

            <h3 className={styles.postTitle}>
            The Philosophy of Ryze: The Pursuit of Knowledge and the Burden of Power
            </h3>

            <div className={styles.details}>
            <span className='styles.username'>Michael Reaves --</span>
            <span className={styles.date}>15.10.1998</span>
            </div>
        </div>
        </Link>

        <Link href="/" className={styles.item}>
        {withImage && (<div className={styles.imageContainer}>
            <Image src="/yasuo.jpeg" alt="p1n.jpeg" fill className={styles.image}/>
        </div>)}
        <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.development}`}> Development

            </span>

            <h3 className={styles.postTitle}>
            Yasuo's Journey: Personal Growth and Development
            </h3>

            <div className={styles.details}>
            <span className='styles.username'>Steve Rogers --</span>
            <span className={styles.date}>15.9.1798</span>
            </div>
        </div>
        </Link>

        <Link href="/" className={styles.item}>
        {withImage && (<div className={styles.imageContainer}>
            <Image src="/braum.jpg" alt="p1n.jpeg" fill className={styles.image}/>
        </div>)}
        <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.collaboration}`}> Collaboration Dynamics

            </span>

            <h3 className={styles.postTitle}>
            Braum: Strength in Unity
            </h3>

            <div className={styles.details}>
            <span className='styles.username'>Tony Stark --</span>
            <span className={styles.date}>5.12.2022</span>
            </div>
        </div>
        </Link>

        <Link href="/" className={styles.item}>
        {withImage && (<div className={styles.imageContainer}>
            <Image src="/jinx.jpeg" alt="p1n.jpeg" fill className={styles.image}/>
        </div>)}
        <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.psychological}`}> Psychological Insights

            </span>

            <h3 className={styles.postTitle}>
            Dancing with Chaos: Psychological Insights from Jinx
            </h3>

            <div className={styles.details}>
            <span className='styles.username'>Michael Reaves --</span>
            <span className={styles.date}>15.10.1998</span>
            </div>
        </div>
        </Link>
   </div>
   
  )
}

export default MenuPosts
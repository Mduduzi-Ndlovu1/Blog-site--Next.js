import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Comments = () => {
    const status = "notauthenticated"
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            Comments
        </h1>
        {status === "authenticated" ? (
            <div className={styles.write}> 
                <textarea placeholder="Write a comment..." className={styles.input} />
                <button className={styles.button}>Post</button>
            </div>
        ) : (
            <Link href="/login" className={styles.link}>Login to Write Comment</Link>
        )}

        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image 
                    src={"/ryze.jpeg"}
                    alt='ryze'
                    width={50}
                    height={50}
                    className={styles.Image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Micheal Reaves</span>
                        <span className={styles.date}>15.10.2023</span> 
                    </div>
                </div>
            <p className={styles.desc}>Actually based my dude !!!!!</p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image 
                    src={"/ryze.jpeg"}
                    alt='ryze'
                    width={50}
                    height={50}
                    className={styles.Image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Micheal Reaves</span>
                        <span className={styles.date}>15.10.2023</span> 
                    </div>
                </div>
            <p className={styles.desc}>Actually based my dude !!!!!</p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image 
                    src={"/ryze.jpeg"}
                    alt='ryze'
                    width={50}
                    height={50}
                    className={styles.Image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Micheal Reaves</span>
                        <span className={styles.date}>15.10.2023</span> 
                    </div>
                </div>
            <p className={styles.desc}>Actually based my dude !!!!!</p>
            </div>
        </div>
    </div>
  )
}

export default Comments
import React from 'react'
import styles from './categoryList.module.css'
import Image from 'next/image'
import Link from 'next/link'
const CategoryList = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
          <Link href="/blog?cat=lessons" className={`${styles.category} ${styles.lessons}`}>
            <Image src="/style1.jpg" alt='style1' width={32} height={32} className={styles.image}/>
            Philosophy
          </Link>

          <Link href="/blog?cat=growth" className={`${styles.category} ${styles.growth}`}>
            <Image src="/growth.jpg" alt='style1' width={32} height={32} className={styles.image}/>
            Development
          </Link>
          
          <Link href="/blog?cat=teamwork" className={`${styles.category} ${styles.teamwork}`}>
            <Image src="/teamwork.jpg" alt='style1' width={32} height={32} className={styles.image}/>
            Collaboration Dynamics          </Link>
          <Link href="/blog?cat=psychological" className={`${styles.category} ${styles.psychological}`}>
            <Image src="/psychological.jpg" alt='style1' width={32} height={32} className={styles.image}/>
            Psychological Insights
          </Link>
      </div>
    </section>
  )
}

export default CategoryList
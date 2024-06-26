import React from 'react'
import styles from './menuCategories.module.css'
import Link from 'next/link'
const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link href="/blog?cat=lessons" className={`${styles.categoryItem} ${styles.lessons}`}> 
            Philosophy
          </Link>
          <Link href="/blog?cat=growth" className={`${styles.categoryItem} ${styles.growth}`}>
            Development
          </Link>
          
          <Link href="/blog?cat=teamwork" className={`${styles.categoryItem} ${styles.teamwork}`}>
            Collaboration Dynamics          
          </Link>

          <Link href="/blog?cat=psychological" className={`${styles.categoryItem} ${styles.psychological}`}>
            Psychological Insights
          </Link>
        </div>
  )
}

export default MenuCategories
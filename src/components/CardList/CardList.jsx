import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination'
import Image from 'next/image'
import Card from '../card/card'
const CardList = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
        <Card/>
        <Card/>
        <Card/>
      <Pagination/>
    </section>
  )
}

export default CardList 
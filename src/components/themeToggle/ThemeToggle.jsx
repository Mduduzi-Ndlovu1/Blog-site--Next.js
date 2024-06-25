"use client"

import styles from './themeToggle.module.css'
import Image from 'next/image'
import {useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const {toggle,theme} = useContext(ThemeContext)
    
  return (
    <div className={styles.container} onClick={toggle}>
        <Image src="/moon.png" alt='moon.png' width={14} height={14}/>
        <div className={styles.ball}></div>
        <Image src="/sun.png" alt='moon.png' width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle
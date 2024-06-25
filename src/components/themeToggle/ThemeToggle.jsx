"use client"

import styles from './themeToggle.module.css'
import Image from 'next/image'
import {useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const {toggle,theme} = useContext(ThemeContext)
    
  return (
    <div className={styles.container} onClick={toggle}
    style={theme === "dark" 
    ? {backgroundColor:"white"} 
    : {backgroundColor:"#0f172a"}}>
        <Image src="/moon.png" alt='moon.png' width={14} height={14}/>
        <div className={styles.ball} style={theme === "dark" 
          ? {left: "2px",background:"#0f172a"} 
          : {right: "2px",background:"white"}}>

          </div>
        <Image src="/sun.png" alt='moon.png' width={14} height={14}/>
    </div>
  ) 
}

export default ThemeToggle
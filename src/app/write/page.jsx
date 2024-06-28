"use client"
import React, { useState } from 'react'
import styles from './writePage.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"
const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <main className={styles.container}>
      <input type="text" placeholder='Title' />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt='plus' width={16} height={16} className="plus"/>
        </button> 
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt='close' width={16} height={16} className="close"/>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt='close' width={16} height={16} className="close"/>
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt='close' width={16} height={16} className="close"/>
            </button>
          </div>
        )}
        <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder='Tell your story'/>
      </div>
    </main>
  )
}

export default WritePage 
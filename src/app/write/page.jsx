"use client"
import React, { useState } from 'react'
import styles from './writePage.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"
import { CiCirclePlus } from "react-icons/ci";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <main className={styles.container}>
      <input type="text" placeholder='Title' className={styles.input }/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus-icon.svg" alt="add" width={16} height={16}/>
        </button> 
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt='close' width={16} height={16} className="close"/>
            </button>
            <button className={styles.addButton}>
              <Image src="/External.png" alt='close' width={16} height={16} className="close"/>
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt='close' width={16} height={16} className="close"/>
            </button>
          </div>
        )}
        <ReactQuill 
        className={styles.textArea}
        theme="bubble" 
        value={value} 
        onChange={setValue} 
        placeholder='Tell your story'/>
      </div>
      <button className={styles.publish}>Publish</button>
    </main> 
  )
}

export default WritePage 
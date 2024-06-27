import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>League of Legends: A Microcosm of Life
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
            <Image src={'/p1n.jpeg'} alt='p1n.jpeg' fill priority className={styles.avatar}/>

            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Mduduzi Ndlovu</span>
              <span className={styles.date}>05.02.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={'/p1n.jpeg'} alt='p1n.jpeg' fill priority className={styles.image}/>
        </div>
      </div>
      <article className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
            Welcome to my blog, where we delve into the fascinating world of League of Legends (LoL) and explore how this game mirrors the complexities and challenges of real life. At first glance, LoL might seem like just another online multiplayer game, but beneath the surface, it offers profound insights into teamwork, strategy, perseverance, and personal growth. Whether you're a seasoned Summoner or new to the Rift, join me as we uncover the life lessons hidden within this beloved game.
            </p>

            <h3>The Champions of Life</h3>
            <p>
            In LoL, each player selects a champion to battle on the Summoner's Rift. These champions, with their unique abilities and backgrounds, reflect the diverse personalities and roles we encounter in our own lives. Just as each champion brings something different to the team, every individual has their own strengths, weaknesses, and contributions in the real world. Success in both the game and life often depends on recognizing and leveraging these unique qualities.
            </p>

            <h3>The Power of Teamwork</h3>
            <p>
            A key element of LoL is its emphasis on teamwork. Players must coordinate with their teammates to achieve common goals, such as securing objectives and outplaying the opposing team. This mirrors real life, where collaboration and effective communication are essential in various settings, from workplaces to personal relationships. Understanding the importance of working together and supporting one another is a fundamental lesson that LoL teaches us.
            </p>

            <h3>Strategy and Adaptability</h3>
            <p>
            Every match in LoL requires strategic planning and the ability to adapt to changing circumstances. Players must make decisions on the fly, react to their opponents' moves, and adjust their strategies accordingly. Similarly, life is full of unexpected twists and turns. Success often hinges on our ability to stay flexible, think critically, and adapt to new challenges. LoL encourages us to develop these skills, both in the game and beyond.
            </p>

            <h3>Overcoming Adversity</h3>
            <p>
            In LoL, setbacks and defeats are inevitable. Even the best players face tough matches and moments of frustration. However, the game teaches us the value of resilience and perseverance. Each loss is an opportunity to learn and improve. In life, we also encounter obstacles and failures, but it is through these experiences that we grow stronger and more capable. LoL reminds us that persistence and a positive attitude can turn the tide in our favor.
            </p>

            <h3>Personal Growth and Mastery
            </h3>
            <p>
            Mastering a champion in LoL requires time, effort, and dedication. Players must invest in learning the intricacies of their chosen characters and continuously refine their skills. This journey mirrors our personal growth in real life. Whether it's developing a new talent, pursuing a career, or building relationships, achieving mastery requires patience and commitment. LoL inspires us to embrace the journey of self-improvement and strive for excellence.
            </p>

            <h3>Conclusion
            </h3>
            <p>
            League of Legends is more than just a game; it's a reflection of the human experience. From teamwork and strategy to resilience and personal growth, the lessons we learn on the Summoner's Rift can be applied to our everyday lives. As we embark on this journey through the world of LoL, let's keep our minds open to the insights it offers and strive to become better both in the game and in life.
            </p>

            <p>
              Stay tuned for more posts as we continue to explore the rich parallels between League of Legends and the world around us. Whether you're looking for game tips or life advice, this blog is here to guide you through both realms. Welcome to the adventure!

            </p>

            
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
          <Menu/>
      </article>
    </section>
  )
}

export default SinglePage
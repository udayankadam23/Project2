"use client"
import React, { useState, useEffect} from 'react'

import Header from '@/Components/Header'
import desktop1 from '../public/desktop1.jpg'
import Image from 'next/image'
import logo from '../public/logo.png'
import desktop2 from '../public/desktop2.jpg'
import desktop3 from '../public/desktop3.png'
import desktop4 from '../public/desktop4.png'
import desktop5 from '../public/desktop5.png'
import desktop6 from '../public/desktop6.png'
import styles from "./page.module.css"
import profile from "../images/d.png"
import bg from "../images/bg.svg"
import Link from 'next/link'


const page = () => {


  const [tweets, setTweets] = useState([
    {
      name: "Elon Musk",
      tweet: " I am DQN because DQN is me.",
      date: "May 29",
      voted: "203"
    },
    {
      name: "Elon Musk",
      tweet: " I am DQN because DQN is me.",
      date: "May 29",
      voted: "203"
    },
    {
      name: "Elon Musk",
      tweet: " I am DQN because DQN is me.",
      date: "May 29",
      voted: "203"
    },
    {
      name: "Elon Musk",
      tweet: " I am DQN because DQN is me.",
      date: "May 29",
      voted: "203"
    },
    {
      name: "Elon Musk",
      tweet: " I am DQN because DQN is me.",
      date: "May 29",
      voted: "203"
    },
  ])

  return (
    <>
      {/* <Header/> */}
      <div className={styles.app_home}>
        <div className={styles.bgImages}>
            <Image src={bg} />
        </div>
        <div className={styles.makeTweet}>
            <h1>I am <span>DQN</span> because</h1>
            <textarea rows={9} placeholder='start typing'></textarea>
            <button><Link href={"https://twitter.com/intent/tweet"} target='_blank'>Tweet</Link></button>
        </div>
        <div className={styles.tweets}>
            <div className={styles.tweets_header}>
                <h2>Tweets</h2>
            </div>
            <div className={styles.tweets_contents}>
                {
                  tweets.map((item , index) => {
                    return(<div className={styles.profile_twi}>
                          <Image src={profile} height={50} width={50} />

                          <div className={styles.details}>
                            <div>
                                <h1>{item.name}</h1>
                                <p>{item.tweet}</p>
                            </div>
                            <p>Voted by : {item.voted}</p>
                          </div>
                    </div>)
                  })
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default page
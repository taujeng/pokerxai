'use client'

import { useState, useContext } from 'react'
import Image from 'next/image'
import { CommunityContext } from './contexts/CommunityContext'
import './page.css'


export default function Home() {
  // const [community, setCommunity] = useState(["red_back","red_back","red_back","red_back","red_back"])
  const { communityCards, setCommunityCards } = useContext(CommunityContext);
  console.log(communityCards)
  return (
    <main className="landing-container">
      <div className=""><img src={`/images/cards/${communityCards[0]}.svg`} alt="Community card 1" /></div>
      <div className=""><img src={`/images/cards/${communityCards[1]}.svg`} alt="Community card 2" /></div>
      <div className=""><img src={`/images/cards/${communityCards[2]}.svg`} alt="Community card 3" /></div>
      <div className=""><img src={`/images/cards/${communityCards[3]}.svg`} alt="Community card 4" /></div>
      <div className=""><img src={`/images/cards/${communityCards[4]}.svg`} alt="Community card 5" /></div>

    </main>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import './page.css'


export default function Home() {
  const [community, setCommunity] = useState(["red_back","red_back","red_back","red_back","red_back"])
  return (
    <main className="landing-container">
      <div className=""><img src={`/images/cards/${community[0]}.svg`} alt="Community card 1" /></div>
      <div className=""><img src={`/images/cards/${community[1]}.svg`} alt="Community card 2" /></div>
      <div className=""><img src={`/images/cards/${community[2]}.svg`} alt="Community card 3" /></div>
      <div className=""><img src={`/images/cards/${community[3]}.svg`} alt="Community card 4" /></div>
      <div className=""><img src={`/images/cards/${community[4]}.svg`} alt="Community card 5" /></div>

    </main>
  )
}

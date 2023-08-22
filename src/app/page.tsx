'use client'

import { useState, useContext } from 'react'
import Image from 'next/image'
import { CommunityContext } from './contexts/CommunityContext'
import './page.css'
import Community from './components/community/Community'
import Hand from './components/hand/Hand'


export default function Home() {

  return (
    <main className="landing-container">
      <Community />
      <Hand />
    </main>
  )
}

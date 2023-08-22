'use client'

import React, {useContext} from 'react'
import {CommunityContext} from '../../contexts/CommunityContext'
import './community.css'

const Community = () => {

  const { communityCards, setCommunityCards } = useContext(CommunityContext);
  return (
    <section className="community-container">
      <div className=""><img src={`/images/cards/${communityCards[0]}.svg`} alt="Community card 1" /></div>
      <div className=""><img src={`/images/cards/${communityCards[1]}.svg`} alt="Community card 2" /></div>
      <div className=""><img src={`/images/cards/${communityCards[2]}.svg`} alt="Community card 3" /></div>
      <div className=""><img src={`/images/cards/${communityCards[3]}.svg`} alt="Community card 4" /></div>
      <div className=""><img src={`/images/cards/${communityCards[4]}.svg`} alt="Community card 5" /></div>
    </section>
  )
}

export default Community

'use client'

import {useState, createContext} from 'react'

export const HandContext = createContext();

export default function HandProvider( {children} ) {
  const [handCards, setHandCards] = useState(["blue_back","blue_back"])
  return <HandContext.Provider value={{handCards, setHandCards}}>{children}</HandContext.Provider>
}
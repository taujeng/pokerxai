'use client'
import { createContext, useState } from "react"

export const CommunityContext = createContext();

export default function CommunityProvider( {children} ) {
  const [communityCards, setCommunityCards] = useState(["red_back","red_back","red_back","red_back","red_back"]);
  return <CommunityContext.Provider value={{communityCards, setCommunityCards}}>{children}</CommunityContext.Provider>
}
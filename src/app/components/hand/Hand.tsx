import React, {useContext, useState} from 'react'
import { HandContext } from '@/app/contexts/HandContext';
import './hand.css'
import CardList from '../cardList/CardList';


const Hand = () => {
  const {handCards, setHandCards} = useContext(HandContext);
  const [handIndex, setHandIndex] = useState(0);
  const [showList, setShowList] = useState(false);


  return (
    <section className="hand-container">
      <div className=""><img src={`/images/cards/${handCards[0]}.svg`} alt="Hand card 1" 
        onClick={()=> {
          setShowList(true);
          setHandIndex(0)
        }}
      /></div>
      <div className=""><img src={`/images/cards/${handCards[1]}.svg`} alt="Hand card 2"
        onClick={()=> {
          setShowList(true);
          setHandIndex(1)
        }}
      /></div>
      {/* <button onClick={()=> setShowList(!showList)}>show cards</button> */}
      {showList && <CardList onSelectCard={(selectedCard) => {
        console.log(selectedCard)
        const newHand = [...handCards];
        newHand[handIndex] = selectedCard;
        setHandCards(newHand);
        console.log(handCards)
      }}
      onClose={()=> setShowList(false)}/>}
    </section>
  )
}

export default Hand
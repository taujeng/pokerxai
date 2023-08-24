import React, {useContext, useState} from 'react'
import { HandContext } from '../../contexts/HandContext';
import { CommunityContext } from '../../contexts/CommunityContext';
import './hand.css'
import CardList from '../cardList/CardList';
import chatGptApi from '../../services/chatGptAPI'


const Hand = () => {
  const {handCards, setHandCards} = useContext(HandContext);
  const {communityCards, setCommunityCards} = useContext(CommunityContext);
  const [handIndex, setHandIndex] = useState(0);
  const [showList, setShowList] = useState(false);
  const [gptResponse, setGptResponse] = useState([]);

  const handleCalculate = async () => {
    const resp = await chatGptApi()
    await setGptResponse(resp)
  }

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
      <button onClick={handleCalculate}>Calculate</button>
      {showList && <CardList onSelectCard={(selectedCard) => {
        console.log(selectedCard)
        const newHand = [...handCards];
        newHand[handIndex] = selectedCard;
        setHandCards(newHand);
        console.log(handCards)
      }}
      onClose={()=> setShowList(false)}/>}
      <div className="">hola. {gptResponse}</div>
    </section>
  )
}

export default Hand
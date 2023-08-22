import React from 'react'
import Image from 'next/image'
import './cardList.css'

interface CardListProps {
  onSelectCard: () => void;
  onClose: () => void;
}

const CardList: React.FC<CardListProps> = ( {onSelectCard, onClose} ) => {

  const order = ["2","3","4","5","6","7","8","9","10","j","q","k","1"]
  return (
    <section className="cardList-overlay" onClick={onClose}>
      <div className="cardList-content" onClick={e => e.stopPropagation()}>
        <section className="suit-col">
          {order.map((x:string, index:number) => (<button key={index}
            onClick={()=>onSelectCard(x)}
          ><img src={`/images/cards/${x}s.svg`} alt={`${x}s`} /></button>))}
        </section>
        <section className="suit-col">
          {order.map((x:string, index:number) => (<button key={index}><img src={`/images/cards/${x}h.svg`} alt={`${x}h`} /></button>))}
        </section>
        <section className="suit-col">
          {order.map((x:string, index:number) => (<button key={index}><img src={`/images/cards/${x}d.svg`} alt={`${x}d`} /></button>))}

        </section>
        <section className="suit-col">
          {order.map((x:string, index:number) => (<button key={index}><img src={`/images/cards/${x}c.svg`} alt={`${x}c`} /></button>))}

        </section>
      </div>


    </section>
  )
}

export default CardList
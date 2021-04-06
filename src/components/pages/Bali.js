import React from 'react';
import CardItem from '../CardItem'
import '../resources/css/Cards.css';

export default function Bali() {
  return (
    <>
      <div className="cards">
        <h1>Bali: The Destination</h1><br />
        <div className="cards__container">
          <div className="cards__container">
            <ul className="cards__items">
                    <CardItem
                src="Bali-Pics/bali-mount-batur.png"
                text="This sacred active volcano lies in Kintamani District in Bali's central highlands."
                label="Mount Batur"
              />&nbsp;
              <CardItem
                src="Bali-Pics/bali-sekumpul-waterfall.png"
                text="series of seven falls, cascading like long misty veils over the lip of a lush. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                label="Sekumpul Waterfall"
              />
            </ul>

            <h1>Beach Attraction</h1><br/>
            <ul className="cards__items">
            <CardItem
                src="Bali-Pics/bali-nusa-islands.png"
                text="Adventure Travel  through Islands  of Bali in  a Private Cruise "
                label="Nusa Island"
                path='/BaliIslands'
              />&nbsp;
              <CardItem
                src="Bali-Pics/bali-top-attractions-kuta-beach.png"
                text="Adventure Travel  through Islands  of Bali in  a Private Cruise "
                label="Kuta Beach"
                path='/BaliIslands'
              />&nbsp;
              <CardItem
                src="Bali-Pics/bali-top-attractions-nusa-dua-beach.png"
                text="Adventure Travel  through Islands  of Bali in  a Private Cruise "
                label="Nusa Dua Beach"
                path='/BaliIslands'
              />
            </ul>

            <h1>Art and Culture</h1><br/>
            <ul className="cards__items">
            <CardItem
                src="Bali-Pics/bali-ubud-art-market.png"
                text="Adventure Travel  through Islands  of Bali in  a Private Cruise "
                label="Ubud Art"
              />&nbsp;
              <CardItem
                src="Bali-Pics/bali-seminyak-shopping.png"
                text="Adventure Travel  through Islands  of Bali in  a Private Cruise "
                label="Seminyak Shopping"
              />
              
            </ul>

            <ul className="cards__items">
            <CardItem
                src="Bali-Pics/bali-nusa-islands.png"
                text="Adventure Travel  through Islands  of Bali in  a Private Cruise "
                label="Nusa Island"
              />&nbsp;
              <CardItem
                src="Bali-Pics/bali-top-attractions-kuta-beach.png"
                text="Adventure Travel  through Islands  of Bali in  a Private Cruise "
                label="Kuta Beach"
              />&nbsp;
              <CardItem
                src="Bali-Pics/bali-top-attractions-nusa-dua-beach.png"
                text="Adventure Travel  through Islands  of Bali in  a Private Cruise "
                label="Nusa Dua Beach"
              />
            </ul>

          </div>
        </div>
      </div>
    </>
  );
}
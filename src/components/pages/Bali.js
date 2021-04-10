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
                text="Adventure Travel  through Islands  of Bali and Explore it's the Art and Culture "
                label="Ubud Art"
              />&nbsp;
              <CardItem
                src="Bali-Pics/bali-seminyak-shopping.png"
                text="Adventure Travel  through Islands  of Bali and Explore it's the Art and Culture "
                label="Seminyak Shopping"
              />
              
            </ul>

            <ul className="cards__items">
            <CardItem
                src="Bali-Pics/Bali-top-gu.png"
                text="Adventure Travel  through Islands  of Bali"
                label="Top View"
              />&nbsp;
              <CardItem
                src="Bali-Pics/Bali-2.png"
                text="Adventure Travel  through Islands  of Bali"
                label="Bali View"
              />&nbsp;
              <CardItem
                src="Bali-Pics/bali-sidemen-valley.png"
                text="Adventure Travel  through Islands  of Bali"
                label="Sidemen Valley"
              />
            </ul>

            <ul className="cards__items">
            <CardItem
                src="Bali-Pics/bali-ubud-monkey-forest.png"
                text="One &nbsp; of &nbsp; the &nbsp; best &nbsp; places &nbsp; to &nbsp; visit in &nbsp; entire &nbsp; Bali &nbsp; if &nbsp; you're an&nbsp; animal lover or photographer. 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                label="Monkey Forest"
              />&nbsp;
            <CardItem
                src="Bali-Pics/bali-jatiluwih-rice-terraces.png"
                text="Tegallalang Rice Terraces is one of the most famous areas to photo- graph these iconic landscapes"
                label="Jatiluwih Rice Terrace"
              />&nbsp;
              
              <CardItem
                src="Bali-Pics/bali-waterbom-bali.png"
                text="Waterbom Bali is an action pack- ed water park, with something for every member of the family. 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "
                label="Water-Bom"
              />
            </ul>
            

          </div>
        </div>
      </div>
    </>
  );
}
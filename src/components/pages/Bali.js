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
                src="images/img-9.jpg"
                text="Explore the hiden Waterfall deep inside the Amazon Jungle"
                label="Water Fall"
              />&nbsp;
                    <CardItem
                src="Amazon-Pics/Aerial-View.png"
                text="Explore the hiden River inside the  &nbsp;  Amazon Jungle &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; "
                label="Aerial View"
              />&nbsp;
                    <CardItem
                src="Amazon-Pics/amazon-rain-forest-2.png"
                text="Adventure Travel  through Islands  of Bali in  a Private Cruise "
                label="Top View"
              />
            </ul>

          </div>
        </div>
      </div>
    </>
  );
}
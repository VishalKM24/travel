import React from 'react'
import CardItem from './CardItem'
import './resources/css/Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out this epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__container">
                    <ul className="cards__items">
                    <CardItem 
                    src="images/img-9.jpg"
                    text="Explore the hiden Waterfall deep inside the Amazon Jungle"
                    label="Adventure"
                    path='/Amazon'
                    />&nbsp;
                    
                    <CardItem 
                    src="images/img-2.jpg"
                    text="Adventure Travel  through Islands  of Bali in  a Private Cruise"
                    label="Luxury"
                    path='/Bali'
                    />
                    </ul>  
                    <ul className='cards__items'>
                    <CardItem 
                    src="images/img-1.jpg"
                    text="Explore the hiden Waterfall deep inside the Amazon Jungle"
                    label="Adventure"
                    path='/products'
                    />&nbsp;
                    <CardItem 
                    src="images/img-3.jpg"
                    text="Explore the hiden Waterfall deep inside the Amazon Jungle"
                    label="Adventure"
                    path='/products'
                    />&nbsp;
                    <CardItem 
                    src="images/img-5.jpg"
                    text="Explore the hiden Waterfall deep inside the Amazon Jungle"
                    label="Adventure"
                    path='/products'
                    />
                    </ul> 
                </div>
            </div>
        </div>
    )
}

export default Cards

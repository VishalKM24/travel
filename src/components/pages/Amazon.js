import React from 'react';
import CardItem from '../CardItem'
import '../resources/css/Cards.css';

export default function Amazon() {
  return (
    <>
    
      <div className="cards">
        <h1>Amazon: The Largest Forest</h1><br />
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
            <h1>Unique Species</h1><br/>
            <ul className='cards__items'>
              <CardItem
                src="Amazon-Pics/amazon-kayaking-tour-scarlette-macaw.png"
                text="Communicate through raucous honks. Vocal communication is highly variable, and are known to be adept mimics of human speech."
                label="Scarlette Macaw"
              />&nbsp;
                    <CardItem
                src="Amazon-Pics/amazon-kayaking-river-dolphin-H3.png"
                text="The largest river dolphin in world.&nbsp;&nbsp;   Commonly seen singly or in two's, or in pods that rarely contain more than eight individuals.&nbsp; &nbsp; "
                label="Dolphin"
              />&nbsp;
                    <CardItem
                src="Amazon-Pics/amazon-kayaking-trips-howler-monkey-T7.png"
                text="The largest river dolphin in world.&nbsp;&nbsp;   Commonly seen singly or in two's, or in pods that rarely contain more than eight individuals.&nbsp; &nbsp; "
                label="Howler Monkey"
              />
            </ul>

            <ul className='cards__items'>
              <CardItem
                src="Amazon-Pics/unique-species/GoldenLion-Tamarian.png"
                text="Also known as the golden marmoset. tamarin has suffered terribly from human encroachment."
                label="Golden Lion-Tamarian"
              />&nbsp;
                    <CardItem
                src="Amazon-Pics/unique-species/Jaguar.png"
                text="There are few thousand jaguars &nbsp;&nbsp; preying on the mega fauna of the Amazon rain forest &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                label="Jaguar"
              />&nbsp;
                    <CardItem
                src="Amazon-Pics/unique-species/threetoedsloth.png"
                text="One of the most common sloths &nbsp;&nbsp; of the Amazon River basin is the three-toed sloth &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                label="Toed Sloth"
              />
            </ul>


            <ul className='cards__items'>
              <CardItem
                src="Amazon-Pics/unique-species/piranha.png"
                text="Equiped with sharp teeth and extremely powerful jaws, which can chomp down on prey with a force of over 70 pounds per square inch.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                label="Piranha"
              />&nbsp;
                    <CardItem
                src="Amazon-Pics/unique-species/poisondartfrog.png"
                text="The more brightly colored, the more powerful its venom. which is why the predators stay far away from iridescent green or orange species.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                label="Dart Frog"
              />&nbsp;
                    <CardItem
                src="Amazon-Pics/unique-species/blackcaiman.png"
                text="Largest and most dangerous reptile of the Amazon River basin. Tehy eat anything that moves, ranging from mammals to birds to their fellow reptiles."
                label="Black Caiman"
              />
            </ul>


            <ul className='cards__items'>
              <CardItem
                src="Amazon-Pics/unique-species/giantotter.png"
                text="Also known as water jaguars or river wolves. They are the largest members &nbsp;of the mustelid family, and closely related to weasels. &nbsp;"
                label="Giant Otter"
                />&nbsp;
                
              <CardItem
                src="Amazon-Pics/unique-species/capybara.png"
                text="It's the world's largest rodent. It likes the warm, humid environs of the Amazon River basin. herds in up to 100 members &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                label="Capybara"
                />
            </ul>

            <h1>Tourist Attraction</h1><br/>
            <ul className='cards__items'>
              <CardItem
                src="Amazon-Pics/Amazon-rainforest.png"
                text="Explore the Mangroove Forest deep inside the Amazon Jungle"
                label="Rainforest"
                />&nbsp;
              <CardItem
                src="Amazon-Pics/tour-kayak-couple.png"
                text="Explore the Couple Rafting deep &nbsp;  inside the Amazon Jungle &nbsp;&nbsp;  "
                label="Couple"
                />&nbsp;
              <CardItem
                src="Amazon-Pics/tour-kayak-group.png"
                text="Explore the Group Rafting deep &nbsp;  inside the Amazon Jungle &nbsp; &nbsp; "
                label="Group"
                />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
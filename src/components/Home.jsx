import React from 'react';

import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import img6 from '../img/6.jpeg';
import img7 from '../img/7.jpeg';
import img8 from '../img/8.jpeg';
import img9 from '../img/9.png';
import img10 from '../img/10.png';
import img11 from '../img/11.jpeg';
import img12 from '../img/12.png';
import img13 from '../img/13.jpeg';
import img14 from '../img/14.jpeg';
import img15 from '../img/15.png';
import img16 from '../img/16.png';
import img17 from '../img/17.jpeg';
import img18 from '../img/18.png';
import img19 from '../img/19.png';
import img20 from '../img/20.jpeg';
import img21 from '../img/21.png';

const Home = () => {
  return (
    <main className="home">
      <section className="home__section home__section--intro">
        <h1 className="home__title">
          Why is Minecraft worth playing?
        </h1>
        <p className="home__text">
          Minecraft is a game full of endless creativity and adventure. Whether you're building incredible structures, exploring vast worlds, or simply hanging out with friends, Minecraft offers freedom and fun like no other game. It's relaxing, educational, and endlessly imaginative a true sandbox experience.
        </p>
      </section>

      <section className="home__section">
        <div className="home__content">
          <img src={img1} alt="Landscape 1" className="home__image" />
          <img src={img2} alt="Landscape 2" className="home__image" />
          <div className="home__textBox">
            <p>
              Minecraft is absolutely beautiful! You can build awesome things, enjoy stunning views, and even go on fun adventures with animals. It’s a world full of wonder and creativity!
            </p>
          </div>
        </div>
      </section>

      <section className="home__section">
        <div className="home__content">
          <img src={img3} alt="Funny build 1" className="home__image" />
          <div className="home__textBox">
            <p>
              Some builds are just hilarious! Like the U.S. President's office hidden in our underground base, my pink bedroom, or a weird beach under Oliwier’s house. And yes – it's all thanks to awesome mods. Super fun!
            </p>
          </div>
          <img src={img4} alt="Funny build 2" className="home__image" />
          <img src={img5} alt="Funny build 3" className="home__image" />
        </div>
      </section>

      <section className="home__section">
        <div className="home__content">
          <img src={img6} alt="Adventure fall" className="home__image" />
          <div className="home__textBox">
            <p>
              Going on an adventure and getting pushed into lava by someone like MikoJump... not fun 😩 But yeah, it happens. That pain is real.
            </p>
          </div>
          <img src={img7} alt="Text strip" className="home__image" />
        </div>
      </section>

      <section className="home__section">
        <div className="home__content">
          <div className="home__textBox">
            <p>
              You can even bury people (or mobs) whose old selves are gone. Chickens, sheep, villagers many of them fell victim to krystek_to_ziom. We’ve got a whole graveyard. RIP legends 💀
            </p>
          </div>
          <img src={img8} alt="Graveyard" className="home__image" />
        </div>
      </section>

      <section className="home__section">
        <div className="home__content">
          <img src={img9} alt="Building fail 1" className="home__image" />
          <div className="home__textBox">
            <p>
              Building fails happen all the time, especially with axes 😅 Highly recommend trying it out. Pure chaos.
            </p>
          </div>
          <img src={img10} alt="Building fail 2" className="home__image" />
        </div>
      </section>

      <section className="home__section">
        <div className="home__content">
          <img src={img11} alt="Mod fun 1" className="home__image" />
          <img src={img12} alt="Mod fun 2" className="home__image" />
          <div className="home__textBox">
            <p>
              Christian mods? Hilarious. The fun you can have while roleplaying religion 10/10 experience.
            </p>
          </div>
        </div>
      </section>

      <section className="home__section">
        <div className="home__content">
          <img src={img13} alt="Animals 1" className="home__image" />
          <img src={img14} alt="Animals 2" className="home__image" />
          <div className="home__textBox">
            <p>
              Animals play a huge role in the Minecraft world. They’re important and should never be harmed!
            </p>
          </div>
          <img src={img15} alt="Animals 3" className="home__image" />
        </div>
      </section>

      <section className="home__section">
        <div className="home__content">
          <div className="home__textBox">
            <p>
              Glitched villagers are just as valuable! No harm should come to them they’re unique and irreplaceable.
            </p>
          </div>
          <img src={img16} alt="Glitched villager 1" className="home__image" />
          <img src={img17} alt="Glitched villager 2" className="home__image" />
        </div>
      </section>

      <section className="home__section">
        <div className="home__content">
          <img src={img18} alt="Community 1" className="home__image" />
          <img src={img19} alt="Community 2" className="home__image" />
          <div className="home__textBox">
            <p>
              This game connects the weirdest and most wonderful people. Absolute chaos but in the best way possible.
            </p>
          </div>
          <img src={img20} alt="Community 3" className="home__image" />
        </div>
      </section>

      <section className="home__section">
        <div className="home__content">
          <div className="home__textBox">
            <p>
              Minecraft is deeply religious. We’ve got churches, cemeteries, even Saint Francis himself!
            </p>
          </div>
          <img src={img21} alt="Religious build" className="home__image" />
        </div>
      </section>
    </main>
  );
};

export default Home;

import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Trending Items</h1>
      <div class="centered">
        <section class="cards">
          <div class="card">
            <img src="https://lostarkcodex.com/icons/use_6_104.webp" />
            <p>
              Guardian Stone Crystal
              <br />
              Price:
              <br />
              Change:
            </p>
          </div>

          <div class="card">
            <img src="https://lostarkcodex.com/icons/use_7_155.webp" />
            <p>
              Honor Leapstone
              <br />
              Price:
              <br />
              Change:
            </p>
          </div>

          <div class="card">
            <img src="https://lostarkcodex.com/images/icon_quest_0.webp" />
            <p>
              Wall familjen
              <br />
              Price:
              <br />
              Change:
            </p>
          </div>
        </section>
      </div>
      <div class="centered">
        <section class="cards">
          <div class="card">
            <img src="https://lostarkcodex.com/icons/use_6_104.webp" />
            <p>
              Guardian Stone Crystal
              <br />
              Price:
              <br />
              Change:
            </p>
          </div>

          <div class="card">
            <img src="https://lostarkcodex.com/icons/use_7_155.webp" />
            <p>
              Honor Leapstone
              <br />
              Price:
              <br />
              Change:
            </p>
          </div>

          <div class="card">
            <img src="https://lostarkcodex.com/images/icon_quest_0.webp" />
            <p>
              Wall familjen
              <br />
              Price:
              <br />
              Change:
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;

import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Trending Items</h1>
      <div class="outer">
        <div class="row">
          <div class="item">
            <a>Hi1</a>
          </div>
          <div class="item">
            <a>Hi1</a>
          </div>
        </div>
        <div class="row">
          <div class="item">
            <a>Hi1</a>
          </div>
          <div class="item">
            <a>Hi1</a>
          </div>
        </div>
        <div class="row">
          <div class="item">
            <a>HI</a>
          </div>
          <div class="item">
            <a>Hi1</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

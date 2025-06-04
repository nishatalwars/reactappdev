import React from "react";
import image from "../images/hero-image.png";
export default function HeroSection() {
  return (
    <section className="HeroSection section">
      <div className="HeroSection-bg-video"></div>
      <div className="HeroSection-outer outer-section">
        <div className="container">
          <div className="HeroSection-inner inner-section">
            <div className="HeroSection-content-left">
              <div className="HeroSection-title align-center">
<div className="btn food-btn">
Testy food forever
</div>
                <h1>
                 
                  We’re <span className="text-orange">serious</span>for
                  <span className="text-orange">food</span> & delivery.
                </h1>
                <div className="HeroSection-subtitle align-center">
                  <p>
                    our job is to filling you yummy with delicious food and with
                    fast and free delivery.
                  </p>
                </div>
                <div className="btn order-btn">
                  <button>order now</button>
                </div>
                <div className="btn menu-btn">
                  <button>see menu</button>
                </div>
              </div>
            </div>

            <div className="HeroSection-content-right">
                <img src={image} alt="Banner section image" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

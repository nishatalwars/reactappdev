import React, { useState } from "react";
  return (
    <section className="HeroSection section">
    
      <div className="HeroSection-outer outer-section">
        <div className="container">
          <div className="HeroSection-inner inner-section">
            <div className="animated-logo align-center">
              <img src={logo} alt="Finay Logo" />
            </div>

            <div className="HeroSection-content">
              <div className="HeroSection-title align-center">
                <h1>
                  The Future of <span className="text-orange">Music.</span>
                  <br /> Owned by You.
                </h1>
              </div>
              <div className="HeroSection-subtitle align-center">
                <h5>Artists Keep. Fans Own. Community Run.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );


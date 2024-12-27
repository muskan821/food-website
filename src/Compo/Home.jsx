import React from "react";

function Home() {
  return (
    <>
      <div className="home-outer">
        <div className="home-container">
          <p>
            Meet, Eat &
            <br />
            Enjoy the{" "}
            <span>
              True
              <br />
              Taste
            </span>
            .
          </p>

          <p id="honme-pera">
            We bring fresh, flavorful, and wholesome meals to your plate.
            Explore our
            <br />
            menu and indulge in your favorite cuisines.
          </p>
          <div className="home-btn">
            <button>
              <a href="">Get Started</a>
            </button>
          </div>
        </div>

        <div className="home-img" data-aos="fade-left" data-aos-duration="1000">
          <img src="https://pngimg.com/d/pasta_PNG67.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;

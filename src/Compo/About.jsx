import React from "react";

function About() {
  return (
    <>
      <div className="outer-about">
        <div
          className="about-img"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src="https://www.pngall.com/wp-content/uploads/8/Restaurant-Food-PNG-Free-Download.png"
            alt=""
          />
        </div>
        <div
          id="about-decription"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2>We Serve Healthy & Testy Food</h2>
          <p>
            include guilt-tree with our commitment to serving wholesome and
            delicious meals.
            <br />
            Explore a menu curated to balance taste and nutrition, ensuring
            every bite is both satisfiying and nourishing.
          </p>
          <button className="about-btn">
            <a href="#">Explore More</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default About;

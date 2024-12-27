import React from "react";

function Shef() {
  return (
    <>
      <div className="outer-shef">
        <div
          className="about-shef"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2>
            Cooked By The Best Chefs In
            <br />
            The World
          </h2>
          <p>
            Meet our talented chef, the heart and soul of our kitchen. With
            years of experience and a passion for crafting delicious meals, our
            chef brings creativity and perfection to every dish. From sourcing
            the finest ingredients to adding a personal touch, each recipe is a
            masterpiece designed to delight your taste buds. Dedicated to
            excellence, our chef ensures every bite is as flavorful and
            memorable as the last.
          </p>
        </div>

        <div
          className="shef-img"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src="https://pngimg.com/uploads/chef/chef_PNG140.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Shef;

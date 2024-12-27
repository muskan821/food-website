import React from "react";

function Review() {
  return (
    <>
      <div className="reviw-outer">
        <div
          className="review-desc"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2>What our customers are saying</h2>
          <p>
            discover firsthand experince and testimonials from our valued
            partros. <br /> Explore the feedbacke and reviews that showcase our
            communitent to <br />
            quality, services and customer satisfaction.{" "}
          </p>
        </div>

        <div
          className="outer-card-review"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="card-review">
            <p class="card-title-review">Jhon Doe</p>
            <p class="small-desc-review">
              As someone who’s always skeptical about trying new food delivery
              services, I was pleasantly surprised by the quality and taste of
              the food here. The delivery was right on time, and the food
              arrived piping hot. Every bite was a burst of flavor, and I
              couldn’t stop myself from finishing the entire meal in one
              sitting.
            </p>
            <div class="go-corner-review">
              <img
                src="https://img.freepik.com/free-photo/close-up-portrait-young-man-isolated-black-studio-background_155003-23971.jpg?size=626&ext=jpg"
                alt="Corner Image"
                class="corner-img-review"
              />
            </div>
          </div>

          <div class="card-review">
            <p class="card-title-review">Lilly Roberts</p>
            <p class="small-desc-review">
              I have a sweet tooth, and the desserts from this website have
              completely won me over. The chocolate brownie was rich and gooey,
              just the way I like it, and the kulfi was perfectly creamy and
              flavorful. It feels like a lot of thought and care goes into every
              order, and I absolutely love that!
            </p>
            <div class="go-corner-review">
              <img
                src="https://img.freepik.com/premium-photo/passport-photo-portrait-asian-smiling-woman_264197-7671.jpg"
                alt="Corner Image"
                class="corner-img-review"
              />
            </div>
          </div>

          <div class="card-review">
            <p class="card-title-review">Nidhi Jain</p>
            <p class="small-desc-review">
              The biryani from this website is an absolute masterpiece! The
              aroma itself is enough to make your mouth water, and the taste
              exceeds all expectations. It’s clear that only the best
              ingredients are used. I’ve tried biryani from many places, but
              this one is by far the best. Keep up the great work!
            </p>
            <div class="go-corner-review">
              <img
                src="https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-creative-colorful-office-interior-design-generative-ai-aig20_31965-142318.jpg"
                alt="Corner Image"
                class="corner-img-review"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;

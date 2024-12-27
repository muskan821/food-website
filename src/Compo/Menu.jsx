import React from "react";
import { item } from "./Product";

function Menu() {
  return (
    <>
      <div className="menu" data-aos="fade-up" data-aos-duration="1000">
        <h2>Ouer Special Dish</h2>
        <p>
          Eat dish promisse an unforgettable dining experience, biending{" "}
          <br></br>
          innovation with tradition to delight your senses.
        </p>
      </div>

      <div classNameName="container">
        <div className="main-conatiner">
          {item.map((Menu) => {
            return (
              <>
                <div className="col-md-4 mb-4 text-center">
                  <div
                    className="card h-100"
                    style={{ width: 18 + "rem" }}
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    <div className="card-img">
                      <img
                        src={Menu.imgUrl}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{Menu.name}</h5>
                      <p className="card-text">{Menu.description}</p>
                      <div className="inner-card">
                        <div className="rating">
                          <p classNameName="card-rating"> {Menu.rating} </p>
                        </div>
                        <div className="cardd-pera">
                          <p classNameName="card-price">{Menu.price}</p>
                        </div>
                      </div>

                      <div className="card-btn">
                        <a href="#" className="btn" id="card-btn">
                          {Menu.button}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Menu;

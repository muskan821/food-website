// import React from "react";

// function Information() {
//   return (
//     <>
//       <div className="outer-info">
//         <div class="card" style={{ width: 18 + "rem" }}>
//           <div class="card-body">
//             <p id="logo">🍜</p>
//             <h5 class="card-title">Order your food</h5>
//             <p class="card-text">
//               Choose from a variety of food, place your order, and enjoy your
//               favorite food . With fast delivery, your meal will always be fresh
//               and tasty.
//             </p>
//             <a href="#" class="card-link">
//               Card link
//             </a>
//           </div>
//         </div>

//         <div class="card" style={{ width: 18 + "rem" }}>
//           <div class="card-body">
//             <p id="logo">🚛</p>
//             <h5 class="card-title">Pick Your Food</h5>
//             <p class="card-text">
//               Explore our menu and pick your favorites from a wide range of
//               delicious options. There's something for everyone to love and
//               enjoy.
//             </p>
//             <a href="#" class="card-link">
//               Card link
//             </a>
//           </div>
//         </div>

//         <div class="card" style={{ width: 18 + "rem" }}>
//           <div class="card-body">
//             <p id="logo">🤩</p>
//             <h5 class="card-title">Enjoy Your Food </h5>
//             <p class="card-text">
//               Sit back, relax, and savor every bite of your meal. With every
//               dish prepared to perfection, it's time to enjoy the flavors you
//               love.
//             </p>
//             <a href="#" class="card-link">
//               Card link
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Information;

import React from "react";

function Information() {
  return (
    <>
      <div className="container mt-5">
        <div className="row gy-4">
          <div className="col-md-4 d-flex justify-content-center">
            <div
              className="card"
              style={{ width: "18rem" }}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="card-body">
                <p id="logo">🍜</p>
                <h5 className="card-title">Order your food</h5>
                <p className="card-text">
                  Choose from a variety of food, place your order, and enjoy
                  your favorite food. With fast delivery, your meal will always
                  be fresh and tasty.
                </p>
                <a href="#" className="card-link">
                  Lern more
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-center">
            <div
              className="card"
              style={{ width: "18rem" }}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="card-body">
                <p id="logo">🚛</p>
                <h5 className="card-title">Pick Your Food</h5>
                <p className="card-text">
                  Explore our menu and pick your favorites from a wide range of
                  delicious options. There's something for everyone to love and
                  enjoy.
                </p>
                <a href="#" className="card-link">
                  Lern more
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-center">
            <div
              className="card"
              style={{ width: "18rem" }}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="card-body">
                <p id="logo">🤩</p>
                <h5 className="card-title">Enjoy Your Food</h5>
                <p className="card-text">
                  Sit back, relax, and savor every bite of your meal. With every
                  dish prepared to perfection, it's time to enjoy the flavors
                  you love.
                </p>
                <a href="#" className="card-link">
                  Lern more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;

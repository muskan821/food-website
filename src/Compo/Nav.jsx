import React from "react";

function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <span>Cake</span> Man
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Menu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contect Us
                </a>
              </li>
            </ul>
            <div>
              <form class="d-flex input-container">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success search-btn"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="bag-icon">
              <div className="outer-bag">
                <i class="fa-solid fa-bag-shopping"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <img
        src="https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-plate-of-cookies-and-pastries-png-image_14730153.png"
        alt=""
      /> */}
    </>
  );
}

export default Nav;

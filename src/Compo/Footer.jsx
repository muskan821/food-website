import React from "react";

function Footer() {
  return (
    <>
      <footer class="simple-footer">
        <div class="footer-content">
          {/* <div class="footer-logo">
            <img src="logo.png" alt="Footer Logo" width="150" />
          </div> */}

          <div class="footer-social">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>

          <div class="footer-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div class="footer-contact">
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

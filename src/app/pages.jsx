import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css"; // Import the custom CSS file

const Homepage = () => {
  return (
    <div className="container">
      <div className="main-content">
        <div className="side-content">
          <img
            src="https://cdn.pixabay.com/photo/2023/12/15/17/04/ai-generated-8451018_640.png"
            alt="Landing Visual"
          />
        </div>
        <div className="content">
          <h1 className="heading">Welcome to</h1>
          <h1 className="heading">Gurukul Kangri University</h1>
          <p>
            Your one-stop solution for all educational. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Obcaecati, itaque eum esse
            adipisci tempore sint alias perferendis dolore recusandae voluptatum
            vitae id, ratione aspernatur quae magni accusamus, rerum aliquid
            minus!
          </p>
          <div>
            {/* <a href="../Home/home.html" className="btn">
              Get Started
            </a>
            <a href="" className="btn">
              Login
            </a> */}
            <Link to="/home" className="btn">
              Get Started
            </Link>
            <Link to="/sign-in" className="btn">
              Login
            </Link>
          </div>
        </div>
      </div>
      <footer>
        <p>&copy; 2023 Edureaka. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;

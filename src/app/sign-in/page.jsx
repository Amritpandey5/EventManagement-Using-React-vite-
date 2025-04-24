import React from "react";
import "./LoginPage.css";  // Importing the custom CSS file

const LoginPage = () => {
  return (
    <div className='wrapper'>
    <div className="login-container">
      <div className="img-box">
        <img
          src="https://cdn.pixabay.com/photo/2023/12/15/17/04/ai-generated-8451018_640.png"
          alt="Login Illustration"
        />
      </div>
      <div className="form-box login">
        <form action="/Home/home.html">
          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user" style={{ color: "#000000" }}></i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt" style={{ color: "#000000" }}></i>
          </div>

          <div className="forget-link">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn">Login</button>

          <p>or login with social platforms</p>

          <div className="social-icons">
            <a href="../Home/home.html">
              <i className="bx bx-envelope" style={{ color: "#d93f49" }}></i>
              <p>Login with college Email</p>
            </a>
          </div>
            <a className='faculty-login' href="">Login as Faculty</a>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;

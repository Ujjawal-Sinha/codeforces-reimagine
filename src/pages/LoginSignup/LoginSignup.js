import React, { useState, useEffect } from "react";
import "./LoginSignup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const LoginSignup = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [overlayClass, setOverlayClass] = useState("overlay-blue");

  useEffect(() => {
    const signInButton = document.getElementById("signIn");
    const signUpButton = document.getElementById("signUp");

    const handleSignInClick = () => {
      setIsRightPanelActive(false);
      setOverlayClass("overlay-blue");
    };

    const handleSignUpClick = () => {
      setIsRightPanelActive(true);
      setOverlayClass("overlay-orange");
    };

    signInButton.addEventListener("click", handleSignInClick);
    signUpButton.addEventListener("click", handleSignUpClick);

    // Cleanup event listeners on component unmount
    return () => {
      signInButton.removeEventListener("click", handleSignInClick);
      signUpButton.removeEventListener("click", handleSignUpClick);
    };
  }, []);

  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Codeforces Redesign</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="body">
        <div className="header">
          <div className="flag">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/2560px-Flag_of_Russia.svg.png"
                alt="Russia Flag"
              />
            </a>
          </div>
          <div className="flag">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                alt="UK Flag"
              />
            </a>
          </div>
        </div>
        <div
          className={`container ${
            isRightPanelActive ? "right-panel-active" : ""
          }`}
          id="main"
        >
          <div className="sign-in">
            <form action="#">
              <h1 style={{ fontSize: "40px" }}>Sign In</h1>
              <div style={{ fontSize: "30px" }} className="social-container">
                <a href="#" className="social">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="social">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="social">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <p style={{ fontSize: "20px", fontWeight: "500" }}>
                Enter your Login details
              </p>
              <input
                type="text"
                name="txt"
                placeholder="Your Codeforces Id"
                required
              />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required
              />
              <button type="button">Sign In</button>
            </form>
          </div>
          <div className="sign-up">
            <form action="#">
              <h1 style={{ fontSize: "40px" }}>Sign Up</h1>
              <div style={{ fontSize: "30px" }} className="social-container">
                <a href="#" className="social">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="social">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="social">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <p style={{ fontSize: "20px", fontWeight: "500" }}>
                Enter your details to create Account
              </p>
              <input type="text" name="txt" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required
              />
              <input
                type="password"
                name="pswd2"
                placeholder="Rewrite your Password"
                required
              />
              <button type="button">Sign Up</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className={`overlay ${overlayClass}`}>
              <div className="overlay-left">
                <h1 style={{ color: "#1F78D1", fontSize: "30px" }}>
                  Welcome Back
                </h1>
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  To keep connected with us login with your personal information
                </p>
                <button id="signIn" type="button">
                  Sign In
                </button>
              </div>
              <div className="overlay-right">
                <h1 style={{ color: "#FF7043", fontSize: "30px" }}>
                  Hello Friend
                </h1>
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  Enter your personal details and start your journey with us
                </p>
                <button id="signUp" type="button">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

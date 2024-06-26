import "./Navbar.css";
import codeforceslogo from "../../utilities/Codeforces_logo.svg.png";
import indiaflag from "../../utilities/India_flag_300.png";

export const Navbar = () => {
  return (
    <>
      <div className="Navbar-container">
        <img className="logo" src={codeforceslogo} alt="Codeforces_Logo" />

        <img className="india-flag" src={indiaflag} alt="India_Flag" />
        <button className="login-btn">Login/Register</button>
      </div>
    </>
  );
};

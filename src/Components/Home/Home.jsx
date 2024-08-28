import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Uni1 from "../../assets/uni1.jpg";
import Uni2 from "../../assets/uni2.jpg";
import Uni3 from "../../assets/uni3.jpg";
import Uni4 from "../../assets/uni4.jpg";

const Images = [Uni1, Uni2, Uni3, Uni4];

const Home = () => {
  const randomImg = () => {
    const imageLink = Images[Math.floor(Math.random() * Images.length)];
    return imageLink;
  };
  return (
    <div className="home">
      <header
        className="header-sec"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0.1, 0.6), rgba(0, 0, 0, 0)), url(${randomImg()})`,
        }}
      >
        <div className="content">
          <h1>Welcome to Campus Guide</h1>
          <p>Your gateway to finding the perfect college.</p>
          <Link to="/colleges" className="cta-button">
            Start Exploring
          </Link>
        </div>
      </header>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Campus Guide</p>
      </footer>
    </div>
  );
};

export default Home;

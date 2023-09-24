import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="home">
          <header className="header-sec">
            
            <h1>Welcome to Campus Guide</h1>
            <p>Your gateway to finding the perfect college.</p>
            <Link to="/colleges" className="cta-button">
              Start Exploring
            </Link>
          </header>
          <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Campus Guide</p>
          </footer>
        </div>
      );
    };


export default Home

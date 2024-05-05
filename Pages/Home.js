import React from "react";
import Layout from '../Layout';
import { Link } from "react-router-dom";
import Banner from '../Images/banner.jpeg';
import '../Styles/HomeStyles.css';

function Home() {
  return (
    <Layout>
      <div className="Home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="HeaderContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/Menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
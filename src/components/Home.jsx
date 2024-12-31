import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import profile_img from "../assets/Manish_Rangan.jpg";

function Home() {
    return (
        <section id="home" className="home">
            <div className="sections">
                <div className="profile-text">
                    <h1>Hi, My Name Is Manish Rangan</h1>
                    <p>Computer Engineering Student @ Georgia Tech | Experienced Entrepreneur & Leader</p>

                    <Link to="/about" className="button"><h3>View My Portfolio</h3></Link>
                </div>

                <div className="profile-image">
                    <img src={profile_img}></img>
                </div>

            </div>

        </section>
    );
}

export default Home;
import React from "react";
import "./About.css";
import uvset_logo from "../assets/UVSET_Logo.png";
import clink_logo from "../assets/Clink_Logo.png";
import global_eye from "../assets/global_eye.PNG";
import clink_pitch from "../assets/ClinkPitch.JPG";


function About() {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>Who I am and What I do</h2>
                    <p>
                        I'm <strong>Manish Rangan</strong>, a Georgia Tech undergraduate student and tech entrepreneur with interests in software design and embedded systems. My passion lies in building startups that aim to improve the human condition. Over the past four years, I've founded two ventures: UVSET and Clink. These startups reflect my commitment to leveraging technology for positive societal impact.
                    </p>
                </div>

                <div className="about-logos">
                    <a href="https://uvsetinc.com">
                        <img src={uvset_logo} className="logo"/>
                    </a>
                    <a href="https://recyclink.biz">
                        <img src={clink_logo} className="logo"/>
                    </a>
                </div>
            </div>

            <div className="about-videos">
                <p>Through these ventures, I’ve not only worked to create meaningful solutions but have also undergone a personal transformation. From a shy, hesitant kid to a confident speaker comfortable addressing crowds of hundreds, these experiences have shaped me into an articulate, forward-thinking individual driven to succeed. Below are examples showcasing my public speaking journey.</p>

                <div className="video-container">
                    <div className="image-container">
                        <img src={clink_pitch}></img>
                    </div>

                    <div className="ted-container">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/opySIC6TRhs?si=48PY0VBFKetLREJg" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                        ></iframe>
                    </div>

                    <div className="image-container">
                        <img src={global_eye}></img>
                    </div>

                    
                </div>
                <p>TedX talk documenting my journey as an early-stage entreprenuer</p>

            </div>
        </section>
    );
}

export default About;
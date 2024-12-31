import React from "react";
import "./Clink.css";

import clink_logo from "../assets/Clink_Logo.png";
import atea from "../assets/ATEA_Logo.png";
import lifecycle from "../assets/Lifecycle.avif";
import clink_image from "../assets/Clink_Image.png";


function Clink() {
    return (
        <section id="clink" className="clink">
            <div className="image">
                <img src={clink_image}></img>
            </div>

            <div className="clink_content">
                <div className="clink_logo">
                    <a href="https://recyclink.biz">
                        <img src={clink_logo}></img>
                    </a>
                </div>

                <div className="text_card">
                    <h2>Clink</h2>
                    <h3>CEO & Co-Founder(Feb 2024 - Present)</h3>
                    <p>Clink is a B2C Marketplace connecting excess materials from construction projects to homeowners and DIYers at a 40% Cut Rate compared to retailers like Home Depot and Lowes. </p>
                    <p>78% of homeowners in 2024 went over budget for their home improvement projects. The construction industry landfills 12 million tons of perfectly reusable excess materials every year. We are here to bridge the gap by creating a new market, one where homeowners and DIYers no longer need to worry about cost for their projects while simultaneously saving the planet.</p>
                    <p>As CEO, I helped develop the cross-platform app using React Native, Node, and AWS, running point on the front-end side. Additionally, I lead company vision, investor networking, and outreach teams to partners and clients, resulting in the early-stage diverting of 10,000 lbs of materials from landfills to homeowners in a two-month pilot testing phase.</p>
                </div>

                <div className="successes">
                    <div className="app">
                        <h3>App Photos</h3>
                        
                    </div>
                    
                    <div className="partners">
                        <h3>Partners & Pitches</h3>
                        <a href="https://www.linkedin.com/posts/manishrangan_innovation-opportunity-sanitization-activity-6966523276160376832-U7uf/?trk=public_profile_like_view">
                            <img src={atea}></img>
                        </a>
                        <a href="https://indicanews-com.cdn.ampproject.org/c/s/indicanews.com/2022/06/03/ateas-emerge-2022-conference/amp/">
                            <img src={lifecycle}></img>
                        </a>
                    </div>

                </div>

            </div>


        </section>
    );

}

export default Clink;
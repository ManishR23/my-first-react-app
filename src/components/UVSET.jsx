import React from "react";
import "./UVSET.css";
import uvset_logo from "../assets/UVSET_Logo.png";
import uvset_prototype from "../assets/uvset_prototype.jpg";
import uvset_video from "../assets/UVSET_Safetouch_Animation.mp4";

import dallas_business from "../assets/DBJ_Logo.png";
import ceo_mom from "../assets/CEO-MOM.webp";
import indica from "../assets/Indica_Logo.png";

import advancing_healthcare from "../assets/Advancing_Healthcare.png";
import atea from "../assets/ATEA_Logo.png";
import oslo_logo from "../assets/oslo_logo.jpg";

function UVSET() {
    return (
        <section id="uvset" className="uvset">
            <div className="image">
                <img src={uvset_prototype}></img>
            </div>

            <div className="uvset_content">
                <div className="uvset_logo">
                    <a href="https://uvsetinc.com">
                        <img src={uvset_logo}></img>
                    </a>
                </div>

                <div className="text_card">
                    <h2>UVSET</h2>
                    <h3>CEO & Co-Founder (2020-2023)</h3>
                    <p>UVSET is a product-based company looking to prevent the spread of disease through door handles utilizing a patent-pending UV-C-based, automated door handle sanitizer. </p>
                    <p>As CEO, I handled product vision, led manufacturing and design teams through three stages of prototyping, and handled investor relations and pitches. These efforts yielded $40,000 raised in funding through two investments, an LOI of $750k from a real estate firm, and 10 prototypes deployed into high-risk centers.</p>
                </div>

                <div className="successes">
                    <div className="press">
                        <h3>Press Coverage</h3>
                        <a href="https://www.bizjournals.com/dallas/inno/stories/profiles/2021/12/14/uv-set-aimen-khan-humza-sheikh-manish-rangan.html">
                            <img src={dallas_business}></img>
                        </a>
                        <a href="https://ceomommagazine.com/ceokid-spotlight-meet-teen-inventor-manish-rangan">
                            <img src={ceo_mom}></img>
                        </a>
                        <a href="https://indicanews.com/preventing-infection-through-sanitization/">
                            <img src={indica}></img>
                        </a>
                    </div>
                    
                    <div className="awards">
                        <h3>Awards</h3>
                        <a href="https://www.linkedin.com/posts/manishrangan_innovation-opportunity-sanitization-activity-6966523276160376832-U7uf/?trk=public_profile_like_view">
                            <img src={oslo_logo}></img>
                        </a>
                        <a href="https://indicanews-com.cdn.ampproject.org/c/s/indicanews.com/2022/06/03/ateas-emerge-2022-conference/amp/">
                            <img src={atea}></img>
                        </a>
                        
                        <a href="https://meridian.allenpress.com/innovationsjournals-IDDB/article/2/2022/73/488269/Abstracts-Presented-at-the-2nd-Annual-Advancing">
                            <img src={advancing_healthcare}></img>
                        </a>

                    </div>

                </div>

            </div>


        </section>
    );

}

export default UVSET;
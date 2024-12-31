import React from "react";
import "./Contact.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css"

import linkedin from "../assets/LinkedIn.png"
import git from "../assets/GitHub.png";
import resume from "../assets/Resume.jpg";

function Contact() {
  const imgArray = [
    {img: linkedin, link: "https://www.linkedin.com/in/manishrangan/"},
    {img: git, link: "https://github.com/ManishR23"}
  ]

  return (
    <section id="contact" className="contact">
      <div className="Get-Touch">
        <h1>Get in Touch</h1>
        <h1>Here's My Resume</h1>

        <img src={resume}></img>

        
      </div>

      <div className="info">
        <h2>Contact Me</h2>
        <p>Email: manishrangan1259@gmail.com</p>
        <p>Phone: 901-326-2275</p>
        <p>Relevant Platforms</p>
        <div className="platforms">
          {imgArray.map(({img, link}, index) => (
            <a key={index} href={link}>
              <img src={img}></img>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Contact;

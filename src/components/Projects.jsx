import React from "react";
import './Projects.css';
import prem_league from '../assets/prem_league.png';
import air_piano from '../assets/air_piano.png';
import curr_converter from '../assets/currency_converter.png';

function Projects() {
    const projects = [
        {title: "Premier League Match Predictor", skills: ["Machine Learning", "Data Scraping", "Python"], image:prem_league, url: 'https://github.com/ManishR23/PremierLeaguePredictor'},
        {title: "Arduino Sensor Based Air Piano", skills: ["Arduino", "Breadboarding", "C++"], image:air_piano, url:'https://github.com/ManishR23/AirPiano'},
        {title: "Currency Converter Mobile App", skills: ["React Native", "Web Scraping", "Typescript/CSS"], image:curr_converter, url: 'https://github.com/ManishR23/CurrencyConverter'},
    ];

    const projects2 = [
        {title: "Simple Computer Memory Peripheral", skills: ["Quartus", "VHDL", "Assembly"], image:air_piano, url:'https://github.com/ManishR23/AirPiano'},
        {title: "WasteMAP | WM Route Optimization", skills: ["Raspberry Pi", "Computer Vision", "CAD Design"], image:prem_league, url:'https://github.com/ManishR23/AirPiano'},
        {title: "Grocery Store Sanitization Apparatus", skills: ["UV-C Technology", "Product Design", "Innovation"], image:prem_league, url: 'https://github.com/ManishR23/AirPiano'}
    ];

    return (
        <section id="projects" className="projects">
            <h1>Technical Projects</h1>
            <div className="project-list">
                {projects.map((project, index) => (

                    <a
                        key={index}
                        href={project.url}
                        className="project-card" 
                    >
                        <img src={project.image}/>
                        <h3>{project.title}</h3>
                        <h4 className="skills-heading">Skills Developed</h4>
                        <u1 className="skills-list">
                            {project.skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </u1>

                    </a>
                ))}
            </div>
            <div className="project-list">
                {projects2.map((project, index) => (

                    <a
                        key={index}
                        href={project.url}
                        className="project-card" 
                    >
                        <img src={project.image}/>
                        <h3>{project.title}</h3>
                        <h4 className="skills-heading">Skills Developed</h4>
                        <u1 className="skills-list">
                            {project.skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </u1>

                    </a>
                ))}
            </div>
            <h2>Click on the Projects to Learn More!</h2>
        </section>
    );
}

export default Projects;
import React from "react";
import "../style/Experience.css";
import Syvasoft from "../assets/Syvasoft.png";

const exp = [
    {
        id: 1,
        role: "Frappe Developer",
        company: "SyvaSoft Business Solutions",
        logo: Syvasoft,
        description:
            "Working on custom ERPNext modules, client-specific customizations, and backend scripting using Python and Frappe Framework.",
        skills: ["Frappe", "ERPNext", "Python", "JavaScript"],
        duration: "Aug 2024 - Present",
        location: "Madurai, India",
    }
];

function Experience() {
    return (
        <div className="experience-container">
            <h1 className="experience-title">Experience</h1>
            {exp.map((item) => (
                <div key={item.id} className="experience-card">
                    <img src={item.logo} alt={item.company} className="company-logo" />
                    <div className="experience-content">
                        <div className="header">
                            <div>
                                <h3 className="role">{item.role}</h3>
                                <h4 className="company">{item.company}</h4>
                            </div>
                            <div className="meta">
                                <p>{item.duration}</p>
                                <p>{item.location}</p>
                            </div>
                        </div>
                        <p className="description">{item.description}</p>
                        <div className="skills">
                            {item.skills.map((skill, index) => (
                                <span key={index} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experience;
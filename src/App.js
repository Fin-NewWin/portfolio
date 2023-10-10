import "./App.css";
import React from "react";
import pfp from "./pics/urielpic.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
    return (
        <div className="portfol">
            <div className="portfol-pfp">
                <div className="intro">
                    <div className="intro-left">
                        <div className="intro-left-wrapper">
                            <img className="pfp" src={pfp} alt="pfp" />
                            <h2 className="intro-intro">Hello, I'm Uriel</h2>
                            <h2 className="intro-name">He/Himothy</h2>
                        </div>
                    </div>
                    <div className="intro-right">
                        <h2> Follow Me: </h2>
                        <a href="https://www.linkedin.com/in/urielbarba/">
                            {" "}
                            <FaLinkedin /> urielbarba
                        </a>

                        <a href="https://github.com/ubarba18">
                            {" "}
                            <FaGithub /> ubarba18
                        </a>
                        <h2>About Me:</h2>
                        <p>
                            Hello, I'm Uriel Barba, a graduate of UC Merced with
                            a Bachelor's degree in Computer Science and
                            Engineering. Through various projects and student
                            groups, I have gained skills in programming
                            including data structures, algorithms, web
                            development, leadership, and teamwork. I am
                            passionate about applying my skills to real-world
                            challenges and positively impacting the field of
                            technology.
                        </p>
                    </div>
                </div>

                <div className="intro-bottom"></div>
            </div>
        </div>
    );
}

export default App;

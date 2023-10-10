import "./App.css";
import React from "react";
<<<<<<< Updated upstream
import pfp from "./lorax_pfp.jpg";

function App() {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2>Hello</h2>
                </div>
            </div>
            <div className="intro-right">
                <h2>TODO: pfp</h2>
=======
import pfp from "./pics/urielpic.jpg";

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
                        <h2>About MySelf:</h2>
                        <p>I am Himothy, aka Finnothy aka Finn</p>
                    </div>
                </div>

                <div className="intro-bottom">
                    <h2>My Links:</h2>
                    <a href="https://www.linkedin.com/in/urielbarba/">
                        {" "}
                        LinkedIn
                    </a>
                </div>
>>>>>>> Stashed changes
            </div>
        </div>
    );
}

export default App;

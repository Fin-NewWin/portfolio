import './App.css';
import React from 'react';
import { Dimensions } from 'react-native';
import pfp from './lorax_pfp.jpg';

function App() {
  return (
    <div class="Main">
        <div class="top">
            <div float="left"> 
                <img width={Dimensions.get('window').width/6}  src={pfp} alt="pfp" />
            </div>
            <div float="right">
                <h1>Bio</h1>
                <p>I'm currently a junior at University of California majoring in Computer Science and Engineering</p>
            </div>
        </div>
    </div>
  );
}

export default App;

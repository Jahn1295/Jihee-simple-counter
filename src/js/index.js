import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;

const SimpleCounter = ({ count }) => {
    const fourth = Math.floor(count / 1000) % 10;
    const third = Math.floor(count / 100) % 10;
    const second = Math.floor(count / 10) % 10;
    const first = count % 10;

    return (
        <div className="clockBody">
            <div className="icon">
            <i class="fa-regular fa-clock"></i>
            </div>
            <div className="fourthDigit">{fourth}</div>
            <div className="thirdDigit">{third}</div>
            <div className="secondDigit">{second}</div>
            <div className="firstDigit">{first}</div>
        </div>
    );
};

const Button = ({ onStopClick }) => {
    return (
        <button onClick={onStopClick}>
            Stop
        </button>
    );
};

const App = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);

    const handleStop = () => {
        setIsRunning(false);
    };

    return (
        <>
            <SimpleCounter count={count} />
            <Button onStopClick={handleStop} />
        </>
    );
};

ReactDOM.createRoot(document.getElementById('app')).render(<App />);


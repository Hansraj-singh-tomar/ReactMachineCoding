import "./styles.css";
import React, { useState } from "react";
import usePasswordGenerator from "./Hooks/usePasswordGenerator";
import PassStrengthChecker from "./Components/PassStrengthChecker";

const App = () => {
    // const [error, setError] = useState()
    const [length, setLength] = useState(4);
    const [checkboxData, setCheckboxData] = useState([
        { title: "Include Uppercase Letters", state: false },
        { title: "Include Lowercase Letters", state: false },
        { title: "Include Numbers", state: false },
        { title: "Include Symbols", state: false }
    ]);
    const [copied, setCopied] = useState(false);

    const { password, errorMessage, generatePassword } = usePasswordGenerator();

    const handleCheckboxChange = (i) => {
        const updatedCheckboxData = [...checkboxData];
        updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
        setCheckboxData(updatedCheckboxData);
    };

    const handleCopy = () => {
        //here navigator is a browser object.
        navigator.clipboard.writeText(password);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    return (
        <div className="container">
            {/* password and copy button */}
            {password && (
                <div className="header">
                    <div className="title">{password}</div>
                    <button className="copyBtn" onClick={() => handleCopy()}>
                        {copied ? "Copied" : "Copy"}
                    </button>
                </div>
            )}

            {/* character length and length */}
            <div className="charlength">
                <span>
                    <label>Character Length</label>
                    <label>{length}</label>
                </span>
                <input
                    type="range"
                    min="4"
                    max="20"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                />
            </div>

            {/* checkboxes */}
            <div className="checkboxes">
                {checkboxData.map((data, i) => {
                    return (
                        <div key={i}>
                            <input
                                type="checkbox"
                                checked={data.checkboxData}
                                onChange={() => handleCheckboxChange(i)}
                            />
                            <label>{data.title}</label>
                        </div>
                    );
                })}
            </div>

            {/* Strength */}
            <PassStrengthChecker password={password} />

            {/* Error handling */}
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}

            {/* Generate password button */}
            <button
                className="generateBtn"
                onClick={() => generatePassword(checkboxData, length)}
            >
                Generate password
            </button>
        </div>
    );
};

export default App;

import { useEffect, useState, useCallback, useRef } from "react";
import "./App.css";

function App() {
  const passwordRef = useRef();

  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numAllowed, setNumAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [btnText, setBtnText] = useState("Copy");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (symbolAllowed) str += "!@#$%^&*+_-()~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // ye hame index provide karega to get char w'll have to use string chatAt() method
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, symbolAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 49); // to select the entire text for that we are using this line
    // document.execCommand('copy');
    window.navigator.clipboard.writeText(password);
    setBtnText("Copied");
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, symbolAllowed, passwordGenerator]);

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md mx-auto shadow-md px-4 py-3 my-8 rounded-lg bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            ref={passwordRef}
            value={password}
            type="text"
            readOnly
            placeholder="Password"
            className="w-full outline-none py-1 px-3"
          />
          <button
            className="outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            {btnText}
          </button>
        </div>

        <div className="flex items-center gap-x-4">
          {/* Range Input */}
          <div className="flex items-center gap-x-1">
            <input
              value={length}
              type="range"
              min={6}
              max={50}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          {/* checkbox - 1 */}
          <div className="flex items-center gap-x-1">
            <input
              defaultChecked={numAllowed}
              type="checkbox"
              id="numberInput"
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* checkbox - 2 */}
          <div className="flex items-center gap-x-1">
            <input
              defaultChecked={symbolAllowed}
              type="checkbox"
              id="symbolInput"
              onChange={() => setSymbolAllowed((prev) => !prev)}
            />
            <label htmlFor="symbolInput">symbols</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

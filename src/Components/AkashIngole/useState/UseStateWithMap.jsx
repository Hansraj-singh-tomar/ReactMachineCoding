import React, { useEffect, useState } from "react";
import "./state.css";
const Card = ({ text }) => {
  return (
    <div className="cardWrapper">
      <span>{text}</span>
    </div>
  );
};

const Form = ({ val, handleChange, handleAdd }) => {
  return (
    <div className="form">
      <input
        type="text"
        value={val}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

const filters = ["apple", "mango", "banana", "grapes"];

const UseStateWithMap = () => {
  // Create state for tabs and input box
  const [activeTab, setActiveTab] = useState(filters[0]);
  const [mapState, setMapState] = useState(new Map());
  const [val, setVal] = useState("");

  useEffect(() => {
    // Fill tabs data in map ds.
    filters.map((el, i) => setMapState(new Map(mapState.set(el, `Hey ${el}`))));
  }, []);

  console.log("Tabs>>", mapState);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAdd = () => {
    setMapState(new Map(mapState.set(val, `Hey ${val}`)));
  };

  const handleChange = (tab) => {
    setVal(tab);
  };

  const handleDelete = (tab) => {
    let prev = new Map(mapState);
    prev.delete(tab);
    setMapState(prev);
    setActiveTab(filters[0]);
    // setMapState(new Map(mapState.delete(tab))); // mapState.delete(tab) this will gives us true/false
  };

  return (
    <>
      <div className="App">
        <h1>useState With Map</h1>
        <h2>Tab Component</h2>
      </div>
      {/* Tabs */}
      <div className="wrapper">
        <div className="tabWrapper">
          {/* {filters.map((tab, idx) => ( */}
          {Array.from(mapState.keys()).map((tab, idx) => (
            <div key={idx} className="closeTabs">
              <div
                onClick={() => handleClick(tab)}
                className={`${activeTab === tab ? "active tab" : "tab"}`}
              >
                {tab}
              </div>
              <div onClick={() => handleDelete(tab)} className="close">
                X
              </div>
            </div>
          ))}
        </div>
        {/* Card Wrapper */}
        <Card text={mapState.get(activeTab)} />
        {/* Form */}
        <Form val={val} handleAdd={handleAdd} handleChange={handleChange} />
      </div>
    </>
  );
};

export default UseStateWithMap;

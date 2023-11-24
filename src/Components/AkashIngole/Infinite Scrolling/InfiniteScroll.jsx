// By Akash ingole

import React, { useState, useEffect } from "react";
import "./Infinite.css";

let PAGE_NUMBER = 1;

const InfiniteScroll = () => {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  console.log(state);
  useEffect(() => {
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=5`)
      .then((res) => res.json())
      .then((json) => setState([...state, ...json.data]));
  }, [page]);

  const scrollToEnd = () => {
    setPage(page + 1);
  };

  window.onscroll = function () {
    // check if the page has scrolled to the bottom
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  return (
    <div className="App">
      {state.length > 0 &&
        state.map((el, i) => {
          return (
            <div key={i} className="container">
              <h4>Id: {el._id}</h4>
              <h4>Name: {el.name}</h4>
              <h4>Trips: {el.trips}</h4>
            </div>
          );
        })}
    </div>
  );
};

export default InfiniteScroll;

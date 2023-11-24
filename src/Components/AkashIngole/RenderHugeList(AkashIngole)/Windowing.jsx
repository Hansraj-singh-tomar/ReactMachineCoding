import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";

const Windowing = () => {
  const [load, setLoad] = useState(false);

  const Row = ({ index, style }) => (
    <h3
      style={{
        ...style,
        margin: 0,
        padding: 12,

        color: "black",
      }}
      className="list"
    >
      Block {index}
    </h3>
  );

  const renderList = () => (
    // return new Array(100).fill(0).map((_, i) => {
    //   return (
    //     <h3
    //       key={i}
    //       style={{ margin: 0, padding: 12, color: "black"}}
    //       className="list"
    //     >
    //       Block {i}
    //     </h3>
    //   );
    // });

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <List
        style={{ border: "1px solid black" }}
        height={500}
        itemCount={10000}
        itemSize={50}
        width={500}
      >
        {Row}
      </List>
    </div>
  );

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Windowing Example</h1>
      <div className="App">{load && renderList()}</div>
      {/* <div>{renderList()}</div> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ textAlign: "center" }} onClick={() => setLoad(true)}>
          Load List
        </button>
      </div>
    </>
  );
};

export default Windowing;

// Theorey part
// Q. what is windowing ?
// 1.
// Windowing or list virtualization is a technique by which one can only render or write the visible
// portion in the current "window or viewport" to the DOM. The number of items that rendered at first time are lesser than the original one.

// 2.
// The remaining items are rendered when we scroll down to it. The DOM nodes of items that
// exist in the window are replaced by the performance of rendering a large list.

// 3.
// Without windowing, the entire list is written to the DOM including items that are not in the current window or viewport.
// It means, you would have to wait until the entire list is written to see the first item.

// This increases total Blocking time, which can be reduced by virtualization or windowing.

// Two packages that supports windowing are -
// 1. react-windowing (this package is totally rewrite of react-virtualize and this much more fasterr and smaller than to other packages)(size of this package is - 896KB)
// 2. react-virtualized (size of this package is - 2.27MB)

// Disadvantage while using this packages
// 1. scroll smooth is little bit lagging

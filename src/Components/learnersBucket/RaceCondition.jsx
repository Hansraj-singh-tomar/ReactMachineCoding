import { useState, useEffect } from "react";

const RaceCondition = () => {
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState("");

  const getRandomTime = () => Math.floor(Math.random() * 3000);

  function getRandomData(data) {
    return new Promise((res, rej) => {
      const time = getRandomTime();
      setTimeout(() => {
        res(data);
      }, time);
    });
  }

  const onChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
    // getRandomData(value).then((val) => {
    //   setResult(val);
    // });
  };

  useEffect(() => {
    let flag = true;
    getRandomData(searchText).then((val) => {
      if (flag) {
        setResult(val);
      }
    });

    return () => {
      flag = false;
    };
  }, [searchText]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="search"
        name="search"
        value={searchText}
        onChange={onChange}
      />
      <div>{result}</div>
    </div>
  );
};

export default RaceCondition;

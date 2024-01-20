// import React, { useState, useMemo } from 'react';

// let options = ["cri", "football", "Hockey"];
// let days = ["weekday", "weekend"];

// function CheckBox() {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [selectedDays, setSelectedDays] = useState([]);

//   const handleOptionChange = (e) => {
//     const value = e.target.value;
//     const isChecked = e.target.checked;

//     if (isChecked) {
//       setSelectedOptions([...selectedOptions, value]);
//     } else {
//       setSelectedOptions(selectedOptions.filter((option) => option !== value));
//     }
//   };

//   const handleDayChange = (e) => {
//     const value = e.target.value;
//     const isChecked = e.target.checked;

//     if (isChecked) {
//       setSelectedDays([...selectedDays, value]);
//     } else {
//       setSelectedDays(selectedDays.filter((day) => day !== value));
//     }
//   };

//   console.log(selectedOptions); // [cri,football] jo bhi check kiya hai vo array ke form me mil jayega

//   return (
//     <div>
//       <h4>Choose options:</h4>
//       {options.map((option) => (
//         <div key={option}>
//           <label>
//             <input
//               type="checkbox"
//               value={option}
//               checked={selectedOptions.includes(option)}  // it will give use true and false type value 
//               onChange={handleOptionChange}
//             />
//             {option}
//           </label>
//         </div>
//       ))}

//       <h4>Choose days:</h4>
//       {days.map((day) => (
//         <div key={day}>
//           <label>
//             <input
//               type="checkbox"
//               value={day}
//               checked={selectedDays.includes(day)}
//               onChange={handleDayChange}
//             />
//             {day}
//           </label>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CheckBox;


// Using useMemo Hook
import React, { useState, useMemo } from 'react';

let options = ["cri", "football", "Hockey"];
let days = ["weekday", "weekend"];

function CheckboxGroup() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);

  const handleOptionChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const handleDayChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedDays([...selectedDays, value]);
    } else {
      setSelectedDays(selectedDays.filter((day) => day !== value));
    }
  };

  console.log(selectedDays);

  const memoizedOptions = useMemo(
    () =>
      options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        </div>
      )),
    [options, selectedOptions]
  );

  const memoizedDays = useMemo(
    () =>
      days.map((day) => (
        <div key={day}>
          <label>
            <input
              type="checkbox"
              value={day}
              checked={selectedDays.includes(day)}
              onChange={handleDayChange}
            />
            {day}
          </label>
        </div>
      )),
    [days, selectedDays]
  );

  return (
    <div>
      <h4>Choose options:</h4>
      {memoizedOptions}

      <h4>Choose days:</h4>
      {memoizedDays}
    </div>
  );
}

export default CheckboxGroup;




/*
    <input type="checkbox" id="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)}
    <lable htmlFor="checkbox"> I agree to term and conditions.</label>
*/ 
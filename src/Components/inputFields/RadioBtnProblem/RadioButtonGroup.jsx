import React, { useState } from 'react';

let options = ["cri", "football", "Hockey"];
let days = ["weekday", "weekend"];
function RadioButtonGroup() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  return (
    <div>
      <h4>Choose an option: {selectedOption}</h4>
      {options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        </div>
      ))}

      <h4>Choose a day: {selectedDay}</h4>
      {days.map((day) => (
        <div key={day}>
          <label>
            <input
              type="radio"
              name="day"
              value={day}
              checked={selectedDay === day}
              onChange={handleDayChange}
            />
            {day}
          </label>
        </div>
      ))}
    </div>
  );
}

export default RadioButtonGroup;

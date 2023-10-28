import React, { createContext, useContext } from 'react'
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"

const AccordionContext = createContext();

const Accordion = ({ currentTab, onChange, children }) => {
  return (
      <div className='accordionContainer'>
          <AccordionContext.Provider value={{currentTab, onChange}}>
            {children}
          </AccordionContext.Provider>
      </div>
  )
}

Accordion.AccordionSummary = ({ label, index }) => {
    const { currentTab, onChange } = useContext(AccordionContext)
    function handleChange() {
        onChange(index);
    }
    return <div className={`question ${currentTab === index ? "active" : null}`} onClick={handleChange}>
        <h3>{label}</h3>
        {currentTab === index ? <IoIosArrowDown /> : <IoIosArrowUp/>}
    </div>
}

Accordion.AccordionDetails = ({ index, children }) => {
    const { currentTab } = useContext(AccordionContext)
    return currentTab === index && <div className='answer'>{children}</div>;
}

export default Accordion;


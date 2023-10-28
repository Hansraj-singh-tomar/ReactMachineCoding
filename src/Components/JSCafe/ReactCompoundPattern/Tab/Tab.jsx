import React, { createContext, useContext } from 'react'
import './Tab.css'

const TabContext = createContext();

export default function Tab({ currentTab, onChange, children }){ // currentTab = index  // onChange = on which tab we are clicking
  return (
    <div className='tab'>
      <TabContext.Provider value={{currentTab, onChange}}>
        {children}
      </TabContext.Provider>
    </div>
  )
}

Tab.HeadContainer = ({ children }) => {
  return <div className='headsContainer'>{ children }</div>
}

Tab.Item = ({ label, index }) => {
  const { currentTab, onChange } = useContext(TabContext);
  function handleChange() {
    onChange(index);
  }
  return <div className={`item ${currentTab === index ? "active" : null}`} onClick={handleChange}> { label } </div>
}

Tab.ContentContainer = ({ children }) => {
  return <div className='contentContainer'>{ children }</div>
}


Tab.ContentItem = ({ index, children }) => {
  const { currentTab } = useContext(TabContext);
  return currentTab === index ? <div>{children}</div> : null;
}
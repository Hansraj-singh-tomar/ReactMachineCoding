// Compound Pattern
// 1. Multiple Components come together to serve a common functionality
// 2. Think of selected tag where selected and option tag jointly help us create dropdowns
// 3. React Context APIs plays a very important role in compound pattern
// 4. Common use cases includes select, dropdown components, or menu items.

import React, { useState } from 'react'
import Tab from './Tab'

const TabCmp = () => {
  const [currentIndex, setIndex] = useState(1);
  function handleChange(newIndex) {
    setIndex(newIndex)
  }
  return (
    <Tab currentTab={currentIndex} onChange={handleChange}>
      <Tab.HeadContainer>
        <Tab.Item label="Tab1" index={1} /> 
        <Tab.Item label="Tab2" index={2} /> 
        <Tab.Item label="Tab3" index={3} /> 
      </Tab.HeadContainer>
      <Tab.ContentContainer>
        <Tab.ContentItem index={1}>
          <h1>I am content 1</h1>
        </Tab.ContentItem>
        <Tab.ContentItem index={2}>
          <h1>I am content 2</h1>
        </Tab.ContentItem>
        <Tab.ContentItem index={3}>
          <h1>I am content 3</h1>
        </Tab.ContentItem>
      </Tab.ContentContainer>
    </Tab>
  )
}

export default TabCmp
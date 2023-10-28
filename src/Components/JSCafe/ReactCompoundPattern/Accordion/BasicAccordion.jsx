import React, {useState} from 'react'
import Accordion from './Accordion'
import './accordion.css'

const Data = [
    {label: "Accordion 1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},
    {label: "Accordion 2", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},
    {label: "Accordion 3", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},
]

const BasicAccordion = () => {
  const [currentIndex, setIndex] = useState(null);
    function handleChange(newIndex) {
        if (currentIndex === newIndex) {
          setIndex(null)
        } else {
            setIndex(newIndex)
        }
    }
  return (
      <div className='container'>
          {
              Data.map((val, i) => {
                  return (              
                    <Accordion key={i} currentTab={currentIndex} onChange={handleChange}>
                          <Accordion.AccordionSummary label={val.label} index={i+1} /> 
                          <Accordion.AccordionDetails index={i+1}>
                              <p>{val.text}</p>
                          </Accordion.AccordionDetails>
                    </Accordion>
                  )
              })
          }
      </div>
  )
}

export default BasicAccordion
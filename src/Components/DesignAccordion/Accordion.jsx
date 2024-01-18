import React, { useState } from 'react'
import styled from "styled-components"

const Data = [
    {Question: "This is first Question", Answer: "You can generate more text using various online generators or even use extensions or plugins available for code editors like Visual Studio Code. Simply search for to find a tool that suits your needs."},
    {Question: "This is first Question", Answer: "You can generate more text using various online generators or even use extensions or plugins available for code editors like Visual Studio Code. Simply search for to find a tool that suits your needs."},
    {Question: "This is first Question", Answer: "You can generate more text using various online generators or even use extensions or plugins available for code editors like Visual Studio Code. Simply search for to find a tool that suits your needs."},
    {Question: "This is first Question", Answer: "You can generate more text using various online generators or even use extensions or plugins available for code editors like Visual Studio Code. Simply search for to find a tool that suits your needs."},
    {Question: "This is first Question", Answer: "You can generate more text using various online generators or even use extensions or plugins available for code editors like Visual Studio Code. Simply search for to find a tool that suits your needs."},
]

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const toggleItem = (index) => {
        if (selected === index) {
            setSelected(null)
        } else {
            setSelected(index);
        }
    }
  return (
      <AccordionContainer>
        {
            Data.map((val, i) => {
                return (
                    <AccordionCmp key={i + 1} index={i} Question={val.Question} Answer={val.Answer} selected={selected} setSelected={setSelected} toggleItem={ toggleItem } />
                )    
            })    
        }
      </AccordionContainer>
  )
}

const AccordionCmp = ({ index, Question, Answer, selected, setSelected, toggleItem }) => {
    // console.log(index);
    
    return (
        <AccordionCard>
            
            <div onClick={() => toggleItem(index)} >
                <h2>{Question}</h2>
                <p>{selected === index ? "▼" : "▲"}</p>
            </div>
            {/* <p className={selected === index ? "answer" : "hide"}>{Answer}</p> */}
            
            {
                selected === index && <p className='answer'>{Answer}</p>
            }
        </AccordionCard>
    )
}

export default Accordion;

const AccordionContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    /* border: 2px solid black; */
    padding: 20px;
`;

const AccordionCard = styled.div`
    margin-bottom: 10px;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 20px;
        color: white;
        background-color: black;    
        cursor: pointer;
    }

    .answer{
        background-color: crimson;
        margin-left: 40px;
        padding: 10px 10px;
        color: white;
    }
`;


// Accordion.jsx component
// import React from 'react'
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// const Accordion = ({ val, showItem, toggleFun }) => {

//     function handleToogle() {
//         toggleFun();
//     }

//     return (
//         <div className='mb-2'>
//             <div onClick={handleToogle} className='bg-slate-500 p-2 text-white flex items-center justify-between rounded-lg cursor-pointer'>
//                 <h1>{val?.title}</h1>
//                 {showItem ? <IoIosArrowDown /> : <IoIosArrowUp />}
//             </div>
//             <div>
//                 {
//                     showItem && <p className='pl-4 text-indigo-950'>{val?.description}</p>
//                 }
//             </div>
//         </div>
//     )
// }

// export default Accordion





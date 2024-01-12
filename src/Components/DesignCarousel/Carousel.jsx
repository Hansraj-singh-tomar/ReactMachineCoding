import React from 'react'
import styled from "styled-components"

const Carousel = () => {
    let box = document.querySelector(".cardContainer");
    

    // dono btn ko scrollLeft dena hai 
    const btnPressPrev = () => {
        let width = box.clientWidth;
        // console.log(width);
        box.scrollLeft = box.scrollLeft - width;
    }
    
    const btnPressNext = () => {
        let width = box.clientWidth;
        // console.log(width);
        box.scrollLeft = box.scrollLeft + width;
    }

    return (
        <CarouselCmp>
            <button className='btnLeft' onClick={btnPressPrev}><p>&lt;</p></button>
            <button className='btnRight' onClick={btnPressNext}><p>&gt;</p></button>
            <CardContainer className='cardContainer'>
                {   
                    [...Array(20)].map((val, i) => {
                        return (
                            <Card key={i} value={i+1} />
                        )
                    })
                }
            </CardContainer>
        </CarouselCmp>
  )
}

export default Carousel


const Card = ({value}) => {
    return (
        <CardCmp>
            <h1>{value}</h1>
        </CardCmp>
    )
}


const CarouselCmp = styled.div`
    overflow: hidden;
    position: relative;
    padding: 26px;

    .btnRight, .btnLeft{
        border: none;
        width: 60px;
        height: 100%;
        position: absolute;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0);
    }
    
    .btnRight{
        right: 0;
    }
    
    p{
        font-size: 50px;
        background-color: rgba(0,0,0,0.436);
        color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 1px black;
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
`;



const CardContainer = styled.div`
    overflow-x: hidden;
    padding:  0 10px;
    display: flex;
    scroll-behavior: smooth;
`;

const CardCmp = styled.div`
    max-width: 150px;
    min-width: 150px;
    height: 200px;
    background-color: red;
    margin: 10px;
    text-align: center;
`;


// App.jsx component 
// import React, { useRef } from "react";
// import Card from "./components/Card";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// const App = () => {

//   const BoxRef = useRef();

//   function handleArrowRight() {
//     let width = BoxRef.current.clientWidth;
//     BoxRef.current.scrollLeft = BoxRef.current.scrollLeft + width;
//   }

//   function handleArrowLeft() {
//     let width = BoxRef.current.clientWidth;
//     BoxRef.current.scrollLeft = BoxRef.current.scrollLeft - width;
//   }

//   return (
//     <div className='pb-6 w-full relative'>
//       <h1 className='text-bold text-center text-2xl font-bold'>Carousel Component</h1>
//       <div ref={BoxRef} className='flex w-screen border-2 overflow-x-hidden border-black transition ease-out duration-400 scroll-smooth'>
//         {
//           [...Array(10)].map((_, index) => <Card key={index} index={index} />)
//         }
//       </div>
//       <div className='absolute top-0 h-full w-full flex justify-between items-center text-3xl'>
//         <button onClick={handleArrowLeft} className='p-1 bg-gray-600 text-white h-10 rounded-full text-center'><IoIosArrowBack /></button>
//         <button onClick={handleArrowRight} className='p-1 bg-gray-600 text-white h-10 rounded-full text-center'><IoIosArrowForward /></button>
//       </div>
//     </div>
//   )
// };
// export default App;

// Card.jsx component

    

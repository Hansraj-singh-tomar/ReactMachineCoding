import { useState } from "react"
import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import {OutlineButtonOne, OutlineButtonTwo } from '../styled/Button.js'
import Rules from "./Rules"

const PlayGame = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("")
    const [showRules, setShowRules] = useState(false)

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 6);
        // console.log(Math.floor(Math.random() * 6)); // 0 to 5 random number de rha hai 
    }

    const roleDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number");
            return;
        }
        const randomNumber = generateRandomNumber();
        // eslint-disable-next-line no-unused-vars
        setCurrentDice((prev) => parseInt(randomNumber))

        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber)
        } else {
            setScore((prev) => prev - 2)
        }
        setSelectedNumber(undefined)
    } 

    const resetScore = () => {
        setScore(0);
    }

  return (
      <MainContainer>
          <div className="top_section">      
              <TotalScore score={score} />
              <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={ setError } />
          </div>
          <RollDice currentDice={currentDice} roleDice={roleDice} />
          <div className="btns">
              <OutlineButtonOne onClick={resetScore}>Reset Score</OutlineButtonOne>
              <OutlineButtonTwo onClick={() => setShowRules(prev => !prev)}>{!showRules ? "Show" : "Hide"} Rules</OutlineButtonTwo>
          </div>
          {
            showRules && <Rules/> 
          }
          
      </MainContainer>
  )
}

export default PlayGame

const MainContainer = styled.main`
    /* margin-top: 40px; */
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btns{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap:10px;
        align-items: center;
    }
`



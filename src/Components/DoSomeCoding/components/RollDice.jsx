import styled from "styled-components"
// eslint-disable-next-line react/prop-types
const RollDice = ({currentDice, roleDice}) => {

  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src={`/Images/dice/dice_${currentDice+1}.png`} alt="dice img" />      
        </div>
        <p>Click on Dice to roll</p>  
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;

    .dice{
        cursor: pointer;
        img {
            width: 150px;
            height: 150px;
        }
    }

    p{
        font-size: 15px;
        font-weight: 500;
    }
`
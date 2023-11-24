import styled from 'styled-components'
// eslint-disable-next-line react/prop-types
const NumberSelector = ({selectedNumber, setSelectedNumber, error, setError}) => {
    
    const numberSelectorhandler = (value) => {
        setSelectedNumber(value);
        setError("");
    }
    
    return (
        <NumberSelectorContainer>
            <h3>{error}</h3>    
            <div className='flex'>
            {
                [...Array(6)].map((item, index) => {
                    return (
                        <Box
                            key={index}
                            onClick={() => numberSelectorhandler(index + 1)}
                            isSelected={ index+1 === selectedNumber}
                        >
                            {index + 1}
                        </Box>
                    )
                })
            }
            </div>
            <p>Selected Number</p>
      </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    .flex{
        display: flex;
        gap:24px;
    }
    p{
        font-size: 18px;
        font-weight: 700;
        float: right;
        line-height: 36px;
    }
    h3{
        text-align: right;
        color: red;
    }
`;

const Box = styled.div`
    height: 60px;
    width: 60px;
    display: grid;
    place-items: center;
    border: 1px solid black;
    color: black;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;

    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`
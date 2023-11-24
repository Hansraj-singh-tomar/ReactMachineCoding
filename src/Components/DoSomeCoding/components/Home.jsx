import styled from 'styled-components'
import {Button} from '../styled/Button.js'
// eslint-disable-next-line react/prop-types
const Home = ({ toggleGamePlay }) => {
  return (
      <Container>
          <div>
              <img src='/Images/dices1.png' alt="img" />
          </div>
          <div className='content'>
              <h1>Dice Game</h1>
              <Button onClick={toggleGamePlay}>Play Now</Button>
          </div>
      </Container>
  )
}

export default Home

const Container = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    height: 100vh;
    display:  flex;
    align-items: center;

    .content{
        h1{
            font-size: 96px;
            font-weight: 700;
            white-space: nowrap;
        }
    }

`

